webpackJsonp([16],{"7yBl":function(e,t,a){var r=a("KV4s");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("8bSs")("3f0de5bd",r,!0)},"89pC":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("EFWR"),l=r.a.ajax,s=r.a.api,n=r.a.dateFormat,i={data:function(){return{tableData:[],pager:{status:0,pageIndex:0,pageSize:10,orderBy:"create_time desc"},currentPage:1,total:0,options:[{value:0,label:"全部"},{value:1,label:"待审核"},{value:2,label:"审核通过"},{value:3,label:"审核不通过"}],updateView:!1,form:{username:"",mobile:"",grade:""},examineView:!1,examineForm:{id:"",status:2,reason:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{max:16,message:"用户名最长为16位",trigger:"blur"}],userNum:[{required:!0,message:"请输入用户编号",trigger:"blur"},{max:8,message:"用户编号最长为8位",trigger:"blur"}],parentNum:[{required:!0,message:"请输入上级编号",trigger:"blur"}],balance:[{required:!0,message:"请输入余额",trigger:"blur"}]}}},mounted:function(){this.getPager()},methods:{toData:function(e,t){return n(e,t)},handleSizeChange:function(e){this.pager.pageSize=e,this.getPager()},handleCurrentChange:function(e){this.pager.pageIndex=e,this.getPager()},getPager:function(){var e=this;l(s.putforwardPager,"POST",this.pager,function(t){e.tableData=t.list,e.total=t.total})},toUpdateView:function(e){this.vacant(),this.getDetails(e),this.updateView=!0},getDetails:function(e){var t=this;l(s.putforwardSelect,"POST",{id:e},function(e){t.form.id=e.id,t.form.username=e.username,t.form.mobile=e.mobile,t.form.grade=e.grade,t.form.price=e.price})},toExamineView:function(e){this.examineView=!0,this.examineForm.id=e},examine:function(){var e=this;l(s.putforwardUpdate,"POST",this.examineForm,function(t){e.examineView=!1,e.getPager(),e.$message({message:"审核成功",type:"success"})})},handleDelete:function(e){var t=this;this.$confirm("确认删除该记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l(s.putforwardDelete,"POST",{id:e},function(e){t.$message({type:"success",message:"删除成功!"}),t.getPager()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},vacant:function(){this.form.id="",this.form.username="",this.form.mobile="",this.form.grade=""}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"putputforward"},[a("el-row",{staticClass:"spec-button"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.getPager},model:{value:e.pager.status,callback:function(t){e.$set(e.pager,"status",t)},expression:"pager.status"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-button",{on:{click:e.getPager}},[e._v("查询")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userRebate.username",label:"用户名",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"userRebate.grade",label:"级别",width:"120",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.userRebate.grade?a("el-tag",{attrs:{size:"small",type:""}},[e._v("普通用户")]):e._e(),e._v(" "),1==t.row.userRebate.grade?a("el-tag",{attrs:{size:"small",type:""}},[e._v("普通会员")]):e._e(),e._v(" "),2==t.row.userRebate.grade?a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("VIP会员")]):e._e(),e._v(" "),3==t.row.userRebate.grade?a("el-tag",{attrs:{size:"small",type:""}},[e._v("总代理")]):e._e(),e._v(" "),4==t.row.userRebate.grade?a("el-tag",{attrs:{size:"small",type:"warning"}},[e._v("区级合伙人")]):e._e(),e._v(" "),5==t.row.userRebate.grade?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("市级合伙人")]):e._e(),e._v(" "),6==t.row.userRebate.grade?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("省级合伙人")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"提现金额",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"alipayNum",label:"支付宝账号",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"alipayName",label:"支付宝名称",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"balance",label:"余额",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("待审核")]):e._e(),e._v(" "),2==t.row.status?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("已审核")]):e._e(),e._v(" "),3==t.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("审核不通过")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:e.toData,width:"165"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.toExamineView(t.row.id)}}},[e._v("审核")]):e._e(),e._v(" "),3==t.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[5,10,20,40],"page-size":e.pager.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{title:"审核",visible:e.examineView,width:"400px"},on:{"update:visible":function(t){e.examineView=t}}},[a("el-form",{ref:"form",attrs:{model:e.examineForm,"label-width":"100px",size:"small"}},[a("el-form-item",{attrs:{label:"是否通过"}},[a("el-switch",{attrs:{"active-value":2,"inactive-value":3},model:{value:e.examineForm.status,callback:function(t){e.$set(e.examineForm,"status",t)},expression:"examineForm.status"}})],1),e._v(" "),3==e.examineForm.status?a("el-form-item",{attrs:{label:"不通过原因"}},[a("el-input",{model:{value:e.examineForm.reason,callback:function(t){e.$set(e.examineForm,"reason",t)},expression:"examineForm.reason"}})],1):e._e(),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.examine("form")}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.examineView=!1}}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.updateView,width:"500px"},on:{"update:visible":function(t){e.updateView=t}}},[a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"级别"}},[a("el-input",{model:{value:e.form.grade,callback:function(t){e.$set(e.form,"grade",t)},expression:"form.grade"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上级ID",prop:"parentNum"}},[a("el-input",{model:{value:e.form.parentNum,callback:function(t){e.$set(e.form,"parentNum",t)},expression:"form.parentNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"余额",prop:"balance"}},[a("el-input",{model:{value:e.form.balance,callback:function(t){e.$set(e.form,"balance",t)},expression:"form.balance"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("修改")]),e._v(" "),a("el-button",{on:{click:function(t){e.updateView=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var u=a("vSla")(i,o,!1,function(e){a("7yBl")},null,null);t.default=u.exports},KV4s:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.spec-button{\r\n  height: 60px;\r\n  padding: 10px;\n}\n.name{\r\n  width: 200px;\r\n  margin-left: 50px;\n}\r\n",""])}});