(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{201:function(e,t,o){var d=o(207);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,o(13).default)("1d1ca5c6",d,!0,{})},202:function(e,t,o){var d=o(209);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,o(13).default)("81bb6994",d,!0,{})},203:function(e,t,o){var d=o(211);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,o(13).default)("77ec0b88",d,!0,{})},204:function(e,t,o){"use strict";o(215),o(85),o(84);var d=o(216),n=o.n(d),a=o(217),i=o.n(a),s={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,n.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,n.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new i.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){var o=new RegExp("<"+t+"[^>]*>"),d=e.match(o);return d?(d=d[0],e.slice(e.indexOf(d)+d.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},l=(o(206),o(208),o(0)),r=Object(l.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"doc-code"},[o("pre",{class:{bg:e.bg}},[o("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),o("span",{staticClass:"scale",on:{click:e.scale}},[o("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[o("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),o("span",{staticClass:"copy",on:{click:e.clip}},[o("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[o("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),o("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),o("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[o("div",{staticClass:"doc-code"},[o("pre",{class:{bg:e.bg}},[e._v("                "),o("code",{ref:"code2",class:e.language}),e._v("\n            ")])])])],1)}),[],!1,null,null,null);t.a=r.exports},205:function(e,t,o){"use strict";o(84);var d=o(214),n={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return d.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},a=(o(210),o(0)),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[o("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[o("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),o("header",{staticClass:"example-header"},[o("span",[e._v("\n                "+e._s(e.title)+"\n                "),o("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),o("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),o("div",{staticClass:"example-split"}),e._v(" "),o("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[o("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?o("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[o("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),o("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),o("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);t.a=i.exports},206:function(e,t,o){"use strict";var d=o(201);o.n(d).a},207:function(e,t,o){(e.exports=o(12)(!1)).push([e.i,".doc-code .hljs {\n  display: block;\n  overflow-x: auto;\n  color: #525252;\n  padding: 15px;\n  -webkit-text-size-adjust: none;\n}\n.doc-code .hljs-doctype {\n  color: #999;\n}\n.doc-code .hljs-tag {\n  color: #3e76f6;\n}\n.doc-code .hljs-attribute {\n  color: #e96900;\n}\n.doc-code .hljs-value {\n  color: #42b983;\n}\n.doc-code .hljs-name {\n  color: #63a35c;\n  font-weight: bold;\n}\n.doc-code .hljs-keyword {\n  color: #e96900;\n}\n.doc-code .hljs-string {\n  color: #42b983;\n}\n.doc-code .hljs-comment {\n  color: #b3b3b3;\n}\n.doc-code .hljs-operator .hljs-comment {\n  color: #525252;\n}\n.doc-code .hljs-regexp {\n  color: #af7dff;\n}\n.doc-code .hljs-built_in {\n  color: #2db7f5;\n}\n.doc-code div {\n  position: relative;\n  font-size: 14px;\n}\n.doc-code span.copy,\n.doc-code span.scale,\n.doc-code span.open-fiddle {\n  border-radius: 0 0 3px 3px;\n  padding: 2px 5px;\n  position: absolute;\n  top: 5px;\n  right: 0;\n  color: #b2b2b2;\n  cursor: pointer;\n}\n.doc-code span.scale {\n  right: 25px;\n}\n.doc-code span.open-fiddle {\n  right: 50px;\n}\n.doc-code .bg {\n  margin: 20px auto;\n}\n.doc-code .bg + span.copy {\n  right: 5px;\n}\n.doc-code span.copy:hover,\n.doc-code span.scale:hover,\n.doc-code span.open-fiddle:hover {\n  color: #5c6b77;\n}\n",""])},208:function(e,t,o){"use strict";var d=o(202);o.n(d).a},209:function(e,t,o){(e.exports=o(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},210:function(e,t,o){"use strict";var d=o(203);o.n(d).a},211:function(e,t,o){(e.exports=o(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},318:function(e,t,o){"use strict";o.r(t);var d=o(212),n=o(213),a=o(204),i=o(205),s={},l={type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"unknown",disabled:!0}]},r={gender:"F"};s.data={field:l,model:r},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(l)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var c={},v={type:"Radio",model:"gender",options:"/radioApi"},_={gender:"F"};c.data={field:v,model:_},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(_)+'\n        };\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';var p={},m={type:"Radio",model:"fruit",options:"/radioApi",subtype:"button"},h={fruit:"F"};p.data={field:m,model:h},p.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(m)+",\n            model: "+JSON.stringify(h)+'\n        };\n    }\n};\n<\/script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';var u={simple:s,api:c,button:p},g={components:{iArticle:d.a,inAnchor:n.a,iCode:a.a,Demo:i.a},data:()=>({code:u}),methods:{handleFieldChange(e,t){console.log(e,t)}}},f=o(0),b=Object(f.a)(g,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("i-article",[o("article",[o("h1",[e._v("Radio")]),e._v(" "),o("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),o("p",[e._v("基本组件-单选框。主要用于一组可选项单项选择")]),e._v(" "),o("div",{staticClass:"api"},[o("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),o("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("属性")]),e._v(" "),o("th",[e._v("说明")]),e._v(" "),o("th",[e._v("类型")]),e._v(" "),o("th",[e._v("默认值")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("model")]),e._v(" "),o("td",[e._v("绑定的值的名称")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("不可为空")])]),e._v(" "),o("tr",[o("td",[e._v("options")]),e._v(" "),o("td",[e._v("选项列表或者选项数据接口，如[{label: '男', 'value': 'M'},{label: '女', 'value': 'F'}, {label: '保密', 'value': 'unknown', disabled: true}]")]),e._v(" "),o("td",[e._v("Array(option) | String")]),e._v(" "),o("td",[e._v("[] | '', 如果为String则为获取选项数据的api。")])]),e._v(" "),o("tr",[o("td",[e._v("api")]),e._v(" "),o("td",[e._v("获取选项的接口")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("''，api的返回值格式为{status: 0, data: [{label: '男', 'value': 'M'}]}")])]),e._v(" "),o("tr",[o("td",[e._v("subtype")]),e._v(" "),o("td",[e._v("可选值为 button 或不填，为 button 时使用按钮样式")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("size")]),e._v(" "),o("td",[e._v("尺寸，可选值为"),o("code",[e._v("large")]),e._v("、"),o("code",[e._v("small")]),e._v("、"),o("code",[e._v("default")]),e._v("或者不设置")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("vertical")]),e._v(" "),o("td",[e._v("是否垂直排列，按钮样式下无效")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])])])]),e._v(" "),o("inAnchor",{attrs:{title:"选项配置",h3:""}}),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("属性")]),e._v(" "),o("th",[e._v("说明")]),e._v(" "),o("th",[e._v("类型")]),e._v(" "),o("th",[e._v("默认值")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("label")]),e._v(" "),o("td",[e._v("选项展示名称")]),e._v(" "),o("td",[e._v("String|Number")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("value")]),e._v(" "),o("td",[e._v("选项的值")]),e._v(" "),o("td",[e._v("String | Number")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("disabled")]),e._v(" "),o("td",[e._v("是否禁用该选项")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])])])])],1),e._v(" "),o("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),o("Demo",{attrs:{title:"基础用法"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:e.code.simple.data.model}},[o("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[e._v("通过设置"),o("code",[e._v("field")]),e._v(", "),o("code",[e._v("model")]),e._v("即可生成一个Radio。")])]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),o("Demo",{attrs:{title:"使用api获取选项信息"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:e.code.api.data.model}},[o("FieldGenerator",{attrs:{field:e.code.api.data.field,"form-model":e.code.api.data.model}})],1)],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[e._v("通过设置"),o("code",[e._v("field.api")]),e._v("可以动态获取选项信息")])]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.api.code))])],1),e._v(" "),o("Demo",{attrs:{title:"Button形态"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:e.code.button.data.model}},[o("FieldGenerator",{attrs:{field:e.code.button.data.field,"form-model":e.code.button.data.model}})],1)],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[e._v("通过设置"),o("code",[e._v("field.subtype")]),e._v("为"),o("code",[e._v("button")]),e._v("可以展示为button形态")])]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.button.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=b},319:function(e,t,o){"use strict";o.r(t);var d=o(212),n=o(213),a=o(204),i=o(205),s={},l={type:"RadioCard",model:"card",showRadio:!1,cardWidth:"220px",cardHeight:"155px",options:[{id:"11",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]},r={card:[]};s.data={field:l,model:r},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(l)+",\n            model: "+JSON.stringify(r)+"\n        };\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var c={},v={type:"RadioCard",model:"card",pageLation:!0,pageSize:2,cardWidth:"220px",cardHeight:"185px",options:[{id:"44",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：44这是北京鸟巢",header:"美丽北京"},{id:"55",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：55这是上海",header:"美丽上海"},{id:"66",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：66这是北京鸟巢",header:"美丽北京"},{id:"77",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：77这是上海",header:"美丽上海"},{id:"88",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：88这是北京鸟巢",header:"美丽北京"},{id:"99",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：99这是上海",header:"美丽上海"}]},_={card:[]};c.data={field:v,model:_},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(_)+"\n        };\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var p={},m={type:"RadioCard",model:"card",pageLation:!0,pageSize:3,cardWidth:"220px",cardHeight:"245px",options:"/radioCardApi"},h={card:[]};p.data={field:m,model:h},p.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(m)+",\n            model: "+JSON.stringify(h)+"\n        };\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var u={},g={type:"RadioCard",model:"card",cardWidth:"220px",cardHeight:"185px",openCarousel:!0,carouselOptions:{loop:!1,radiusDot:!1},options:[{id:"carousel1",footer:"大北京夜上海",header:"美丽中国",urls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"]},{id:"carousel2",footer:"夜上海大北京",header:"中华大地",urls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"]}]},f={card:[]};u.data={field:g,model:f},u.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(g)+",\n            model: "+JSON.stringify(f)+"\n        };\n    }\n};\n<\/script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var b={simple:s,page:c,api:p,carousel:u},F={components:{iArticle:d.a,inAnchor:n.a,iCode:a.a,Demo:i.a},data:()=>({code:b}),computed:{pageModel(){return this.code.page.data.model}},watch:{pageModel:{handler(){},deep:!0}},methods:{handleClick(){}}},x=o(0),y=Object(x.a)(F,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("i-article",[o("article",[o("h1",[e._v("RadioCard 选择框卡片")]),e._v(" "),o("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),o("p",[e._v("基本组件-选择框卡片。主要用于可选的卡片-支持图片和视频显示")]),e._v(" "),o("div",{staticClass:"api"},[o("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),o("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("属性")]),e._v(" "),o("th",[e._v("说明")]),e._v(" "),o("th",[e._v("类型")]),e._v(" "),o("th",[e._v("默认值")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("model")]),e._v(" "),o("td",[e._v("绑定的值的名称")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("不可为空")])]),e._v(" "),o("tr",[o("td",[e._v("options")]),e._v(" "),o("td",[e._v("选项列表,如\n                                "),o("pre",[e._v("[\n    {\n        type: '',\n        url: '',\n        showRadio: true,\n        disabled: false\n    }\n]\n                                ")])]),e._v(" "),o("td",[e._v("Array(option) | String")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("optionsType")]),e._v(" "),o("td",[e._v("内容类型(图片:image,视频:video)")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("image")])]),e._v(" "),o("tr",[o("td",[e._v("api")]),e._v(" "),o("td",[e._v("获取选项的接口")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("''，api的返回值格式为:\n                                "),o("pre",[e._v('{\n    status: 0,\n    data: [\n        {\n            "id": "",\n            "url": ""\n        }\n    ]\n}\n                                ')])])]),e._v(" "),o("tr",[o("td",[e._v("showRadio")]),e._v(" "),o("td",[e._v("是否展示卡片radio")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("true")])]),e._v(" "),o("tr",[o("td",[e._v("cardWidth")]),e._v(" "),o("td",[e._v("Card宽度")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("220px")])]),e._v(" "),o("tr",[o("td",[e._v("cardHeight")]),e._v(" "),o("td",[e._v("Card高度")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("220px")])]),e._v(" "),o("tr",[o("td",[e._v("pageLation")]),e._v(" "),o("td",[e._v("是否分页")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])]),e._v(" "),o("tr",[o("td",[e._v("pageSize")]),e._v(" "),o("td",[e._v("每页条数")]),e._v(" "),o("td",[e._v("Number")]),e._v(" "),o("td",[e._v("10")])]),e._v(" "),o("tr",[o("td",[e._v("videoControl")]),e._v(" "),o("td",[e._v("视频源是否展示播放控件")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])]),e._v(" "),o("tr",[o("td",[e._v("openCarousel")]),e._v(" "),o("td",[e._v("开启走马灯。true：开启，需要配置options.urls")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions")]),e._v(" "),o("td",[e._v("走马灯配置信息，如\n                                "),o("pre",[e._v("{\n    value: 0,\n    loop: false,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    dots: inside,\n    radiusDot: false,\n    trigger: click,\n    arrow: hover,\n    easing: ease\n}\n                                ")])]),e._v(" "),o("td",[e._v("Object")]),e._v(" "),o("td",[e._v("-")])])])]),e._v(" "),o("inAnchor",{attrs:{title:"选项配置",h3:""}}),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("属性")]),e._v(" "),o("th",[e._v("说明")]),e._v(" "),o("th",[e._v("类型")]),e._v(" "),o("th",[e._v("默认值")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("options.url")]),e._v(" "),o("td",[e._v("内容地址（默认，不启用走马灯）")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("options.header")]),e._v(" "),o("td",[e._v("头部信息")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("options.footer")]),e._v(" "),o("td",[e._v("尾部信息")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("options.disabled")]),e._v(" "),o("td",[e._v("是否禁用该选项")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])]),e._v(" "),o("tr",[o("td",[e._v("options.urls")]),e._v(" "),o("td",[e._v("走马灯数据（启用走马灯）")]),e._v(" "),o("td",[e._v("Array")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.value")]),e._v(" "),o("td",[e._v("幻灯片的索引，从 0 开始")]),e._v(" "),o("td",[e._v("Number")]),e._v(" "),o("td",[e._v("0")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.loop")]),e._v(" "),o("td",[e._v("是否开启循环")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.autoplay")]),e._v(" "),o("td",[e._v("是否自动切换")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.autoplaySpeed")]),e._v(" "),o("td",[e._v("自动切换的时间间隔，单位为毫秒")]),e._v(" "),o("td",[e._v("Number")]),e._v(" "),o("td",[e._v("2000")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.dots")]),e._v(" "),o("td",[e._v("指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("inside")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.radiusDot")]),e._v(" "),o("td",[e._v("是否显示圆形指示器")]),e._v(" "),o("td",[e._v("Boolean")]),e._v(" "),o("td",[e._v("false")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.trigger")]),e._v(" "),o("td",[e._v("指示器的触发方式，可选值为 click（点击），hover（悬停）")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("click")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.arrow")]),e._v(" "),o("td",[e._v("切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("hover")])]),e._v(" "),o("tr",[o("td",[e._v("carouselOptions.easing")]),e._v(" "),o("td",[e._v("动画效果")]),e._v(" "),o("td",[e._v("String")]),e._v(" "),o("td",[e._v("ease")])])])])],1),e._v(" "),o("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),o("Demo",{attrs:{title:"基础用法",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:e.code.simple.data.model}},[o("FieldGenerator",{attrs:{field:e.code.simple.data.field}})],1)],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[e._v("通过设置"),o("code",[e._v("field")]),e._v(", "),o("code",[e._v("model")]),e._v("即可生成一个RadioCard。")])]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),o("Demo",{attrs:{title:"分页",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:e.code.page.data.model}},[o("FieldGenerator",{attrs:{field:e.code.page.data.field}})],1)],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[e._v("通过设置"),o("code",[e._v("field.pageLation")]),e._v("可以控制是否本地分页。")])]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.page.code))])],1),e._v(" "),o("Demo",{attrs:{title:"api",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:e.code.api.data.model}},[o("FieldGenerator",{attrs:{field:e.code.api.data.field}})],1)],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[e._v("通过设置"),o("code",[e._v("field.options")]),e._v("可以是接口地址")])]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.api.code))])],1),e._v(" "),o("Demo",{attrs:{title:"走马灯",vertical:""}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("Form",{attrs:{model:e.code.carousel.data.model}},[o("FieldGenerator",{attrs:{field:e.code.carousel.data.field}})],1)],1),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("p",[e._v("通过设置"),o("code",[e._v("field.openCarousel")]),e._v("可以开启走马灯")])]),e._v(" "),o("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.carousel.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=y}}]);