(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{259:function(e,l,t){var i=t(301);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(13).default)("34ec6c46",i,!0,{})},300:function(e,l,t){"use strict";var i=t(259);t.n(i).a},301:function(e,l,t){(e.exports=t(12)(!1)).push([e.i,".container[data-v-33fa0b26] {\n  margin: 10px 40px;\n  width: 90%;\n}\n",""])},350:function(e,l,t){"use strict";t.r(l);t(40);var i=[{type:"Divider",label:"输入框",orientation:"left",dashed:!0,size:"small"},{type:"Input",label:"输入框",model:"input",placeholder:"请输入用户名",required:!0,defaultHide:!1},{type:"Input",label:"用户名-禁用",model:"inputForbidden",readonly:!0,disabled:!0,placeholder:"请输入用户名",defaultHide:!1},{type:"Input",subtype:"textarea",label:"输入框",model:"textarea",placeholder:"请输入用户名",required:!0,defaultHide:!1},{type:"InputNumber",label:"数值多行输入框",model:"inputNumber",placeholder:"",required:!0},{type:"InputMultiple",label:"多条记录输入框",model:"inputMultiple",placeholder:"",required:!0,defaultList:["默认用户"],succMessage:"添加成功",delMessage:"删除成功"},{type:"TimePickerMultiple",label:"多条记录时间输入框",model:"timePickerMultiple",placeholder:"",required:!0,tips:"支持多时间段：05:00 - 06:00",format:"HH:mm",timeSplit:" - "},{type:"Divider",label:"下拉选择",orientation:"left",dashed:!0,size:"small"},{type:"Select",label:"单选下拉",model:"singleSelect",required:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},{type:"Select",label:"单选下拉可搜索",model:"singleSelectApi",required:!0,api:"/selectApi",apiParams:["radio","paramsContainerTest"]},{type:"Select",label:"多选下拉",multiple:!0,model:"multiSelect",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}],required:!0},{type:"Select",multiple:!0,label:"多选下拉支持搜索",api:"/selectApi",apiParams:"all",model:"multiSelectApi"},{type:"Divider",label:"单选框",orientation:"left",dashed:!0,size:"small"},{type:"Radio",label:"单选",model:"radio",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}],required:!0},{type:"Radio",subtype:"button",label:"单选按钮",model:"radioButton",required:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},{type:"Divider",label:"复选框",orientation:"left",dashed:!0,size:"small"},{type:"Checkbox",label:"多选",model:"checkbox",checkAll:!0,options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四",value:"4"}],required:!0},{label:"卡片多选",type:"CheckboxCard",model:"card",checkAll:!0,pageLation:!0,pageSize:3,headerEditable:!0,footerEditable:!0,cardWidth:"220px",cardHeight:"245px",optionsType:"image",options:"/checkboxCardApi",inline:!0,required:!0},{type:"Divider",label:"表格选择",orientation:"left",dashed:!0,size:"small"},{type:"TableSelect",label:"表格单选",model:"tableSelect",columns:[{title:"名称",key:"name"},{title:"描述",key:"description"}],options:[{id:1,name:"admin",description:"超级管理员，拥有所有权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:2,name:"user",description:"普通用户，只有浏览的权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:3,name:"editor",description:"编辑，可以编辑、发布文章等",create_time:"2019-9-10",update_time:"2019-10-10"},{id:4,name:"auditor",description:"审核人员，可以查看、审核文案",create_time:"2019-9-10",update_time:"2019-10-10"}]},{type:"TableSelect",label:"表格多选",multiple:!0,model:"multipleTableSelect",columns:[{title:"名称",key:"name"},{title:"描述",key:"description"}],options:[{id:1,name:"admin",description:"超级管理员，拥有所有权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:2,name:"user",description:"普通用户，只有浏览的权限",create_time:"2019-9-10",update_time:"2019-10-10"},{id:3,name:"editor",description:"编辑，可以编辑、发布文章等",create_time:"2019-9-10",update_time:"2019-10-10"},{id:4,name:"auditor",description:"审核人员，可以查看、审核文案",create_time:"2019-9-10",update_time:"2019-10-10"}]},{type:"Divider",label:"树形选择",orientation:"left",dashed:!0,size:"small"},{type:"Tree",label:"树形单选",model:"tree",options:[{id:"1",title:"用户管理",children:[{id:"2",title:"查看用户"},{id:"3",title:"新增用户"},{id:"4",title:"编辑用户"},{id:"5",title:"删除用户"},{id:"11",title:"编辑用户角色"}]},{id:"6",title:"角色管理",children:[{id:"7",title:"查看角色"},{id:"8",title:"新增角色"},{id:"9",title:"编辑角色"},{id:"10",title:"删除角色"}]}]},{type:"Tree",label:"树形多选",model:"multipleTree",multiple:!0,showCheckbox:!0,options:[{id:"1",title:"用户管理",children:[{id:"2",title:"查看用户"},{id:"3",title:"新增用户"},{id:"4",title:"编辑用户"},{id:"5",title:"删除用户"},{id:"11",title:"编辑用户角色"}]},{id:"6",title:"角色管理",children:[{id:"7",title:"查看角色"},{id:"8",title:"新增角色"},{id:"9",title:"编辑角色"},{id:"10",title:"删除角色"}]}]},{type:"Divider",label:"级联选择",orientation:"left",dashed:!0,size:"small"},{type:"Cascader",label:"省/城市/景点",model:"cascader",required:!0,changeType:"all",options:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林",children:[{value:"1",label:"选项一"},{value:"2",label:"选项2"}]}]}]}]},{type:"Cascader",label:"省/城市/景点-api",model:"cascaderApi",required:!0,api:"/cascaderApi",options:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]}]},{type:"Divider",label:"日期时间",orientation:"left",dashed:!0,size:"small"},{type:"DatePicker",subtype:"date",label:"日期选择",model:"date",placeholder:"",required:!0},{type:"DatePicker",subtype:"daterange",label:"日期区间选择",model:"daterange",placeholder:"",required:!0},{type:"DatePicker",subtype:"datetime",label:"日期时间选择",model:"datetime",placeholder:"",required:!0,editable:!0,clearable:!0},{type:"DatePicker",subtype:"datetimerange",label:"日期时间区间选择",model:"datetimerange",placeholder:"",required:!0},{type:"Divider",label:"逻辑输入",orientation:"left",dashed:!0,size:"small"},{type:"LogicInput",label:"逻辑输入",model:"logicInput",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"]},{type:"LogicSelect",label:"逻辑选择",model:"logicSelect",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3"},{label:"选项四",value:"4"}]},{type:"LogicSelect",label:"逻辑选择Api",model:"logicSelectApi",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],api:"/selectApi",apiParams:["radio"]},{type:"Divider",label:"切换",orientation:"left",dashed:!0,size:"small"},{type:"Switch",label:"切换",trueValue:"A",falseValue:"B",model:"switch"},{type:"Divider",label:"文件上传",orientation:"left",dashed:!0,size:"small"},{type:"Upload",subtype:"drag",accept:"image/gif, image/jpeg, image/png",format:["jpg","jpeg","png"],maxSize:2e4,action:"/uploadApi",multiple:!1,paste:!0,disabled:!1,data:{userName:"bingblog"},withCredentials:!0,showUploadList:!0,apiParams:["radio"],label:"文件上传",model:"upload",tip:"上传的提示信息或者帮助信息",required:!0},{type:"ImgUpload",subtype:"drag",maxSize:2e4,action:"/uploadApi",multiple:!0,paste:!0,data:{userName:"bingblog"},nameEditable:!0,withCredentials:!0,label:"图片上传",model:"imgUpload",tip:"上传的提示信息或者帮助信息",required:!0},{type:"VideoUpload",subtype:"drag",maxSize:2e4,action:"/uploadVideoApi",multiple:!0,paste:!0,data:{userName:"bingblog"},nameEditable:!0,withCredentials:!0,label:"视频上传",model:"videoUpload",tip:"上传的提示信息或者帮助信息",required:!0},{type:"MediaUpload",subtype:"drag",maxSize:2e5,action:"/uploadVideoApi",multiple:!0,paste:!0,data:{userName:"bingblog"},nameEditable:!0,withCredentials:!0,label:"媒体上传",model:"mediaUpload",tip:"上传的提示信息或者帮助信息",required:!0},{type:"Select",label:"省",api:"/selectApi",model:"province"},{type:"Select",label:"市",api:"/selectApi",apiParams:["province"],model:"city"},{type:"Select",label:"县",api:"/selectApi",apiParams:["province","city"],model:"town"},{type:"Submit",subtype:"primary",text:"提交",width:"50%",inline:!0},{type:"Reset",subtype:"primary",text:"重置",width:"50%",labelWidth:0,inline:!0}],a={input:"",inputForbidden:"",textarea:"",inputMultiple:["成员1","成员2"],timePickerMultiple:["05:00 - 08:00"],singleSelect:"",radioButton:"",singleSelectApi:"",multiSelect:[],multiSelectApi:[],checkbox:[],radio:"1",date:"",daterange:[],datetime:"",datetimerange:[],cascader:[],cascaderApi:[],tableSelect:1,multipleTableSelect:[1,2],tree:["2"],multipleTree:["1","2","10"],inputNumber:0,logicInput:{},logicSelect:{},logicSelectApi:{},switch:!1,upload:[],imgUpload:[],videoUpload:[],mediaUpload:[],province:"",city:"",town:""},d={labelWidth:130,title:" 分组表单",labelPosition:"left",tip:{title:"规则",content:"规则内容"}},o={fields:i.map(e=>(e.defaultValue=a[e.model],e)),options:d},r={data:()=>({form:{config:JSON.stringify(o,null,8)},model:a,fields:i,options:d,paramsContainer:{paramsContainerTest:"xxx"}}),mounted(){setTimeout(()=>{this.$set(this.paramsContainer,"paramsContainerTest","xxx-1"),setTimeout(()=>{this.$set(this.paramsContainer,"paramsContainerTest","xxx-2")},5e3)},5e3)},beforeDestroy(){},methods:{submit(){this.$refs.FormGenerator.submit().then(e=>{console.log("submit",e);var l=[];Object.keys(e).map(t=>{l.push({key:t,value:e[t]})}),console.log("submit",JSON.stringify(l))})},reset(){this.$refs.FormGenerator.reset()},handleChange(e,l){console.log(e,l)},handleButtonEvent(e){console.log(e)}}},n=(t(300),t(0)),p=Object(n.a)(r,(function(){var e=this.$createElement,l=this._self._c||e;return l("div",[l("Row",{staticClass:"container"},[l("div",{staticClass:"container"},[l("FormGenerator",{ref:"FormGenerator",attrs:{fields:this.fields,model:this.model,options:this.options,"params-container":this.paramsContainer},on:{"on-field-change":this.handleChange,"on-button-event":this.handleButtonEvent}})],1)])],1)}),[],!1,null,"33fa0b26",null).exports;l.default=p}}]);