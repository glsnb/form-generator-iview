(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{212:function(e,n,t){"use strict";t(84);var a={data:()=>({list:[]}),mounted(){for(var e=[],n=this.$slots.default[0].elm.querySelectorAll(".anchor"),t=0;t<n.length;t++){var a=n[t].querySelectorAll("h2")[0];if(a){var l=a.innerHTML,r=n[t].querySelectorAll("h2")[0].getAttribute("id");e.push({title:l,path:r})}}for(var i=this.$slots.default[0].elm.querySelectorAll(".example"),o=0;o<i.length;o++){var s=i[o].querySelectorAll("header span a")[0].getAttribute("href").replace("#",""),d=i[o].querySelectorAll("header span a")[0].getAttribute("data-title").replace("#","");e.push({title:d,path:s})}this.list=e},methods:{handleClickLink(e){var n=document.getElementById(e).offsetTop;window.location.hash=e;var t=n+15;"API"===e&&(t-=150),window.scrollTo(0,t)}}},l=(t(221),t(0)),r=Object(l.a)(a,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper-container"},[n("Row",[n("i-col",{attrs:{span:"21"}},[n("div",{staticClass:"wrapper-content"},[this._t("default")],2)]),this._v(" "),n("i-col",{attrs:{span:"3"}},[n("Affix",{attrs:{"offset-top":75}},[this.list.length?n("div",{staticClass:"catalogue"},[n("Anchor",{attrs:{"show-ink":""}},this._l(this.list,(function(e){return n("AnchorLink",{key:e.path,attrs:{href:"#"+e.path,title:e.title}})})),1)],1):this._e()])],1)],1)],1)])])}),[],!1,null,null,null);n.a=r.exports},218:function(e,n,t){var a=t(222);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(13).default)("0cacca5a",a,!0,{})},221:function(e,n,t){"use strict";var a=t(218);t.n(a).a},222:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,".wrapper {\n  font-size: 14px;\n}\n.wrapper-header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  right: 0;\n  z-index: 1000;\n}\n.wrapper-header .ivu-menu-horizontal {\n  height: 65px;\n  line-height: 65px;\n}\n.wrapper-header .ivu-menu-horizontal:after {\n  display: none !important;\n}\n.wrapper-header-nav {\n  width: 95%;\n  height: 65px;\n  margin: 0 auto;\n}\n.wrapper-header-nav-list {\n  height: inherit;\n  float: right;\n}\n.wrapper-header-nav-list:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.wrapper-header-nav-logo {\n  height: 50px;\n  margin-top: 8px;\n  float: left;\n}\n.wrapper-header-nav-logo img {\n  height: 100%;\n}\n.wrapper-header-nav-search {\n  float: left;\n  margin-left: 60px;\n}\n.wrapper-header-nav-search .ivu-select {\n  width: 165px;\n  font-size: 14px;\n}\n.wrapper-header-nav-search .ivu-select-selection {\n  border: 0;\n}\n.wrapper-header-nav-search .ivu-select-visible .ivu-select-selection {\n  box-shadow: none;\n}\n.wrapper-header-nav-search .ivu-select-arrow {\n  display: none !important;\n}\n.wrapper-header-nav-search .ivu-select-input {\n  font-size: 14px;\n}\n.wrapper-container {\n  background: #fff;\n  margin: 0 auto;\n}\n.wrapper-content {\n  padding: 20px 25px;\n  position: relative;\n}\n.wrapper-content h1,\n.wrapper-content h2,\n.wrapper-content h3,\n.wrapper-content h4,\n.wrapper-content h5,\n.wrapper-content h6 {\n  display: inline-block;\n}\n.wrapper-content h1,\n.wrapper-content h2,\n.wrapper-content blockquote {\n  margin: 12px 0;\n}\n.wrapper-content h2 {\n  margin-top: 30px;\n  font-size: 18px;\n}\n.wrapper-content h3 {\n  margin: 8px 0;\n}\n.wrapper-content:after {\n  content: '';\n  display: block;\n  width: 1px;\n  background: #d7dde4;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -1px;\n}\n.wrapper-content li {\n  line-height: 30px;\n}\n.wrapper-aside {\n  display: block;\n  width: calc(100% - 2px);\n  border: 1px solid #e8eaec;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.wrapper-aside-no-padding {\n  padding: 0;\n  border: 1px solid transparent;\n}\n.wrapper-aside img {\n  width: 100%;\n  border-radius: 3px;\n  opacity: 0.8;\n  transition: opacity 0.2s ease-in-out;\n}\n.wrapper-aside img:hover {\n  opacity: 1;\n}\n.api table {\n  font-family: Consolas,Menlo,Courier,monospace;\n  font-size: 12px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n.api table th {\n  background: #f7f7f7;\n  white-space: nowrap;\n  color: #5c6b77;\n  font-weight: 600;\n}\n.api table td,\n.api table th {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n.api table td ul li {\n  font-size: 12px !important;\n}\n",""])},235:function(e,n,t){"use strict";var a={},l=[{label:"姓名",type:"Input",model:"name",placehold:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{label:"城市",type:"Select",model:"city",placehold:"请选择",options:[{label:"北京",value:"Beijing"},{label:"上海",value:"Shanghai"},{label:"广州",value:"Guangzhou"},{label:"深圳",value:"Shenzhen"}],required:!0},{label:"生日",type:"DatePicker",model:"birthday",required:!0},{label:"性别",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"}],required:!0},{label:"水果",type:"Checkbox",model:"fruit",options:[{label:"西瓜",value:"1"},{label:"苹果",value:"2"},{label:"梨子",value:"3"}],required:!0},{type:"Submit",subtype:"primary",text:"提交",inline:!0},{type:"Reset",text:"重置",labelWidth:0,inline:!0}],r={name:"",city:"",birthday:"",gender:"",fruit:[]};a.data={fields:l,model:r},a.code="\n<script>\nconst fields = "+JSON.stringify(l,null,4)+";\nconst model = "+JSON.stringify(r,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model\n        };\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :model="model"\n    />\n</template>\n';var i={},o=[{type:"Input",label:"姓名",model:"name",required:!0}],s={name:"张三",age:18};i.data={fields:o,model:s},i.code="\n<script>\nconst fields = "+JSON.stringify(o,null,4)+";\nconst model = "+JSON.stringify(s,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :model="model"\n    />\n</template>\n';var d={},p=[{type:"Input",label:"姓名",model:"name",rules:[{type:"string",required:!0,message:"请填入正确姓名"}]}],u={name:"张三",age:12};d.data={rulesRules:p,rulesModel:u},d.code="\n<script>\nconst fields = "+JSON.stringify(p,null,4)+";\nconst model = "+JSON.stringify(u,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';var c={},m=[{type:"Radio",subtype:"button",label:"是否确认",model:"asure",options:[{label:"确认",value:"1"},{label:"放弃",value:"0"}],rules:[{type:"enum",enum:["1"],required:!0,message:"必须选择确认"}]}],h={asure:"1"};c.data={enumFileds:m,enumModels:h},c.code="\n<script>\nconst fields = "+JSON.stringify(m,null,4)+";\nconst model = "+JSON.stringify(h,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';var f={},g={name:"张三",age:21},v=[{type:"InputNumber",label:"年龄",model:"age",rules:[{type:"number",validator:(e,n)=>n>20,message:"年龄大于20岁"}]}];f.data={validatorFileds:v,validatorModels:g},f.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: [\n                {\n                    type: 'InputNumber',\n                    label: '年龄',\n                    model: 'age',\n                    rules: [{\n                        type: 'number',\n                        validator(rule, value) {\n                            validator(rule, value) {\n                                return value > 20;\n                            },\n                        },\n                        message: '年龄大于20岁'\n                    }]\n                }\n            ],\n            model: "+JSON.stringify(g)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';var b={},y={name:"张三",age:21},w=[{type:"InputNumber",label:"年龄",model:"age",rules:[{type:"number",asyncValidator:(e,n)=>new Promise((e,t)=>{n>20?e():t("年龄大于20岁~")}),message:"年龄大于20岁！"}]}];b.data={asyncValidatorFileds:w,asyncValidatorModels:y},b.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: [\n                {\n                    type: 'InputNumber',\n                    label: '年龄',\n                    model: 'age',\n                    rules: [{\n                        type: 'number',\n                        asyncValidator(rule, value) {\n                            return new Promise((resolve, reject) => {\n                                if (value > 20) {\n                                    resolve();\n                                } else {\n                                    reject('年龄大于20岁~');\n                                }\n                            });\n                        }\n                    }]\n                }\n            ],\n            model: "+JSON.stringify(y)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n';var x={},S={name:"张三",age:1},F=[{type:"InputNumber",label:"年龄",model:"age",rules:[{type:"number",asyncValidator:(e,n)=>new Promise((e,t)=>{n>20?e():t("年龄大于20岁~")})}]},{type:"Submit",subtype:"primary",text:"提交",width:"50%",inline:!0}];x.data={submitFileds:F,submitModels:S},x.code="\n<script>\nexport default {\n    data() {\n        return {\n            fields: [\n                {\n                    type: 'InputNumber',\n                    label: '年龄',\n                    model: 'age',\n                    rules: [{\n                        type: 'number',\n                        asyncValidator(rule, value) {\n                            return new Promise((resolve, reject) => {\n                                if (value > 20) {\n                                    resolve();\n                                } else {\n                                    reject('年龄大于20岁~');\n                                }\n                            });\n                        }\n                    }]\n                },\n                {\n                    type: 'Submit',\n                    subtype: 'primary',\n                    text: '提交',\n                    width: '50%',\n                    inline: true\n                }\n            ],\n            model: "+JSON.stringify(S)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<\/script>\n<template>\n    <FormGenerator\n            :fields="fields"\n            :model="model"\n        />\n</template>\n',n.a={validateForm:a,required:i,enumConfig:c,rules:d,validatorConfig:f,asyncValidatorConfig:b,submitConfig:x}},367:function(e,n,t){"use strict";t.r(n);var a=t(212),l=t(235),r={components:{iArticle:a.a},data:()=>({code:l.a}),methods:{handleFieldChange(){}}},i=t(0),o=Object(i.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("i-article",[n("article",[n("h1",[this._v("表单校验-总结")])])])}),[],!1,null,null,null).exports;n.default=o}}]);