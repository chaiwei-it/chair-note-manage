webpackJsonp([15],{"Q+8z":function(e,t,i){(e.exports=i("BkJT")(!1)).push([e.i,'\n.goodsUpdate {\n\t  /*width: 500px;*/\n\t  /*margin: 50px auto;*/\n}\n.className {\n\t  margin: 30px 0px;\n\t  padding: 0 50px;\n\t  height: 50px;\n\t  background-color: #d9ebf8;\n}\n.className div{\n\t  line-height: 50px;\n\t  color: #0c65d2;\n\t  font-size: 18px;\n}\n.form-left{\n\t  width: 45%;\n}\n.el-form-item .el-form-item{\n\t  width: 100%;\n}\n.el-form-item {\n\t  width: 45%;\n}\n.el-form-item__content .el-input .el-input__inner {\n\t  width: 400px;\n}\n.cell .el-input .el-input__inner {\n\t  width: 100%;\n}\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 100px;\n    height: 100px;\n    line-height: 100px;\n    text-align: center;\n}\n.thumbnailImage {\n    width: 100px;\n    height: 100px;\n    display: block;\n}\n.oblongImage {\n    width: 250px;\n    height: 100px;\n    display: block;\n}\n.exhibitionImage {\n    width: 250px;\n    height: 100px;\n    display: block;\n}\n\n\t/*  .detailImage {\n    width: 750px;\n    height: 300px;\n    display: block;\n  }*/\ninput::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\ninput[type="number"] {\n    -moz-appearance: textfield;\n}\n',""])},UCrB:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("3cXf"),o=i.n(r),a=i("EFWR"),s=a.a.ajax,l=a.a.api,n={data:function(){return{fileUrl:l.uploadImage,goodsType:[],exhibitionImage:"",specValueList:{},detailImage:"",detailImageList:[],form:{id:this.$route.params.id,typeId:"",name:"",subtitle:"",costPrice:"",originalPrice:"",nowPrice:"",thumbnailImage:"",oblongImage:"",exhibitionImage:"",detailImage:"",goodsSpecStatus:!1,specList:{},goodsSpecList:[],stock:0,memberPrice:0,vipPrice:0,agentPrice:0,areaPrice:0,cityPrice:0,provincePrice:0,exclusive:1},dialogVisible:!1,dialogImageUrl:"",stockStatus:!1,spec:[],goodsExclusive:[{value:0,label:"普通商品"},{value:1,label:"新人专属"},{value:2,label:"会员专属"}],specList:{},rules:{typeId:[{required:!0,message:"请选择商品类型",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{max:16,message:"用户名最长为16位",trigger:"blur"}],subtitle:[{required:!0,message:"请输入副标题",trigger:"blur"}],costPrice:[{required:!0,message:"请属于成本价",trigger:"blur"}],originalPrice:[{required:!0,message:"请属于原价",trigger:"blur"}],nowPrice:[{required:!0,message:"请属于现价",trigger:"blur"}],thumbnailImage:[{required:!0,message:"请上传缩略图",trigger:"blur"}],oblongImage:[{required:!0,message:"请上传首页长图",trigger:"blur"}],detailImage:[{required:!0,message:"请上传详情图",trigger:"blur"}],stock:[{required:!0,message:"请输入库存",trigger:"blur"}],memberPrice:[{required:!0,message:"请输入普通会员返利",trigger:"blur"}],vipPrice:[{required:!0,message:"请输入VIP会员返利",trigger:"blur"}],agentPrice:[{required:!0,message:"请输入总代理返利",trigger:"blur"}],areaPrice:[{required:!0,message:"请输入区域代理返利",trigger:"blur"}],cityPrice:[{required:!0,message:"请输入市级代理返利",trigger:"blur"}],provincePrice:[{required:!0,message:"请输入省级代理返利",trigger:"blur"}]}}},mounted:function(){this.getDetails()},methods:{getDetails:function(){var e=this;s(l.goodsSelect,"POST",{id:this.form.id},function(t){e.form.typeId=t.typeId,e.form.name=t.name,e.form.subtitle=t.subtitle,e.form.costPrice=t.costPrice,e.form.originalPrice=t.originalPrice,e.form.nowPrice=t.nowPrice,e.form.thumbnailImage=t.thumbnailImage,e.form.oblongImage=t.oblongImage,e.form.exhibitionImage=t.exhibitionImage;var i=t.detailImage.split(",");for(var r in i){var o={};o.url=i[r],e.detailImageList.push(o)}e.detailImage=e.detailImageList,e.form.goodsSpecStatus=t.goodsSpecStatus,e.specList=JSON.parse(t.specList),e.form.goodsSpecList=t.goodsSpecList,e.form.stock=t.stock,e.form.memberPrice=t.memberPrice,e.form.vipPrice=t.vipPrice,e.form.agentPrice=t.agentPrice,e.form.areaPrice=t.areaPrice,e.form.cityPrice=t.cityPrice,e.form.provincePrice=t.provincePrice,e.form.exclusive=t.exclusive,e.getTypeList(),console.log(e.detailImageList)})},getTypeList:function(){var e=this;s(l.goodsTypeList,"POST",{},function(t){e.goodsType=t.list,e.InitializationType()})},InitializationType:function(){var e=this;s(l.typeSpecList,"POST",{typeId:this.form.typeId},function(t){for(var i in console.log("规格列表初始化完成"),e.spec=t.list,e.form.specList=e.specList,e.specValueList={},t.list){var r=t.list[i].value;for(var o in r)e.specValueList[r[o].id]=r[o]}})},typeChange:function(){var e=this;s(l.typeSpecList,"POST",{typeId:this.form.typeId},function(t){for(var i in console.log("规格列表渲染完成"),e.spec=t.list,e.form.specList=e.specList,e.specValueList={},t.list){e.form.specList[t.list[i].id]=[];var r=t.list[i].value;for(var o in r)e.specValueList[r[o].id]=r[o]}e.form.goodsSpecList=[],console.log(e.form.specList)})},specChange:function(){var e=[];for(var t in this.form.specList){var i=this.form.specList[t];if(i.length>0){var r=e;e=[];for(var o=0;o<i.length;o++){var a=i[o];if(r.length>0)for(var s in r){var l={};l.specIds=r[s].specIds+","+this.specValueList[a].id,l.specNames=r[s].specNames+","+this.specValueList[a].name,e.push(l)}else{var n={};n.specIds=this.specValueList[a].id,n.specNames=this.specValueList[a].name,e.push(n)}}}}for(var c in this.form.goodsSpecList=[],e){var m={};m.specIds=e[c].specIds,m.specNames=e[c].specNames,m.costPrice=0,m.originalPrice=0,m.nowPrice=0,m.stock=0,this.form.goodsSpecList.push(m)}e.length>0?(this.stockStatus=!0,this.stockChange()):(this.stockStatus=!1,this.form.stock=0),console.log(this.form.specList)},stockChange:function(){for(var e=0,t=0;t<this.form.goodsSpecList.length;t++){var i=this.form.goodsSpecList[t].stock;e=parseInt(e)+parseInt(i)}this.form.stock=e},numInput:function(e){this.val=e.replace(/[^\d]/g,"")},uploadThumbnailImageSuccess:function(e,t,i){2e4===e.code&&(this.form.thumbnailImage=e.url)},uploadOblongImageSuccess:function(e,t,i){2e4===e.code&&(this.form.oblongImage=e.url)},uploadExhibitionImageSuccess:function(e,t,i){2e4===e.code&&(this.exhibitionImage=i)},uploadDetailImageSuccess:function(e,t,i){2e4===e.code&&(this.detailImage=i),console.log(this.fileList2)},uploadExhibitionImageRemove:function(e,t){this.exhibitionImage=t},uploadDetailImageRemove:function(e,t){this.detailImage=t},uploadImageFormat:function(e){var t="";console.log(e);for(var i=0;i<e.length;i++){if(e[i].response)var r=e[i].response.url;else r=e[i].url;t=0===i?r:t+","+r}return t},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},uploadError:function(e,t,i){console.log("上传失败，请重试！")},beforeAvatarUpload:function(e){console.log("上传前判断")},onSubmit:function(e){var t=this;this.form.exhibitionImage=this.uploadImageFormat(this.exhibitionImage),this.form.detailImage=this.uploadImageFormat(this.detailImage),this.form.specList=o()(this.form.specList),this.$refs[e].validate(function(e){if(!e)return t.$message({message:"请输入必填字段",type:"error"}),!1;s(l.goodsUpdate,"POST",t.form,function(e){t.$message({message:"修改成功",type:"success"}),window.history.go(-1)})})},cancel:function(){window.history.go(-1)}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"goodsUpdate"},[i("el-form",{ref:"form",staticStyle:{"margin-top":"20px"},attrs:{rules:e.rules,model:e.form,"label-width":"120px",inline:!0}},[i("div",{staticClass:"className"},[i("div",[e._v("基本信息")])]),e._v(" "),i("el-form-item",{attrs:{label:"类型",prop:"typeId"}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:e.typeChange},model:{value:e.form.typeId,callback:function(t){e.$set(e.form,"typeId",t)},expression:"form.typeId"}},e._l(e.goodsType,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"专属类型",prop:"typeId"}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:e.typeChange},model:{value:e.form.exclusive,callback:function(t){e.$set(e.form,"exclusive",t)},expression:"form.exclusive"}},e._l(e.goodsExclusive,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"副标题",prop:"subtitle"}},[i("el-input",{model:{value:e.form.subtitle,callback:function(t){e.$set(e.form,"subtitle",t)},expression:"form.subtitle"}})],1),e._v(" "),i("div",{staticClass:"className"},[i("div",[e._v("价格信息")])]),e._v(" "),i("el-form-item",{attrs:{label:"成本价",prop:"costPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.costPrice,callback:function(t){e.$set(e.form,"costPrice",t)},expression:"form.costPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"原价（市场价）",prop:"originalPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.originalPrice,callback:function(t){e.$set(e.form,"originalPrice",t)},expression:"form.originalPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"现价",prop:"nowPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.nowPrice,callback:function(t){e.$set(e.form,"nowPrice",t)},expression:"form.nowPrice"}})],1),e._v(" "),i("div",{staticClass:"className"},[i("div",[e._v("图片信息")])]),e._v(" "),i("el-form-item",{attrs:{label:"缩略图",prop:"thumbnailImage"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.fileUrl,multiple:"",name:"files","show-file-list":!1,onError:e.uploadError,onSuccess:e.uploadThumbnailImageSuccess,beforeUpload:e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[e.form.thumbnailImage?i("img",{staticClass:"thumbnailImage",attrs:{src:e.form.thumbnailImage}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),i("el-form-item",{attrs:{label:"首页长图",prop:"oblongImage"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.fileUrl,multiple:"",name:"files","show-file-list":!1,onError:e.uploadError,onSuccess:e.uploadOblongImageSuccess,beforeUpload:e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview}},[e.form.oblongImage?i("img",{staticClass:"oblongImage",attrs:{src:e.form.oblongImage}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),i("el-form-item",{attrs:{label:"轮播图"}},[i("el-upload",{attrs:{action:e.fileUrl,multiple:"",name:"files","list-type":"picture-card",onError:e.uploadError,onSuccess:e.uploadExhibitionImageSuccess,beforeUpload:e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview,"on-remove":e.uploadExhibitionImageRemove}},[i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),i("el-form-item",{attrs:{label:"详情图",prop:"detailImage"}},[i("el-upload",{attrs:{action:e.fileUrl,multiple:"",name:"files","file-list":e.detailImageList,"list-type":"picture-card",onError:e.uploadError,onSuccess:e.uploadDetailImageSuccess,beforeUpload:e.beforeAvatarUpload,"on-preview":e.handlePictureCardPreview,"on-remove":e.uploadDetailImageRemove}},[i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),i("div",{staticClass:"className"},[i("div",[e._v("规格信息")])]),e._v(" "),i("el-form-item",{attrs:{label:"是否启用规格"}},[i("el-switch",{model:{value:e.form.goodsSpecStatus,callback:function(t){e.$set(e.form,"goodsSpecStatus",t)},expression:"form.goodsSpecStatus"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"库存",prop:"stock"}},[e.form.goodsSpecStatus?i("el-input",{attrs:{disabled:e.stockStatus},model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",t)},expression:"form.stock"}}):i("el-input",{model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",t)},expression:"form.stock"}})],1),e._v(" "),i("div",{staticClass:"el-form-item"},e._l(e.spec,function(t){return e.form.goodsSpecStatus?i("el-form-item",{key:t.id,attrs:{label:t.name}},[i("el-checkbox-group",{on:{change:e.specChange},model:{value:e.form.specList[t.id],callback:function(i){e.$set(e.form.specList,t.id,i)},expression:"form.specList[specItem.id]"}},e._l(t.value,function(t){return i("el-checkbox",{key:t.id,attrs:{label:t.id},model:{value:t.id,callback:function(i){e.$set(t,"id",i)},expression:"valueItem.id"}},[e._v(e._s(t.name))])}))],1):e._e()})),e._v(" "),e.form.goodsSpecStatus?i("el-form-item",{attrs:{label:"规格"}},[i("el-table",{attrs:{data:e.form.goodsSpecList,border:""}},[i("el-table-column",{attrs:{prop:"specNames",label:"规格信息",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{model:{value:t.row.specNames,callback:function(i){e.$set(t.row,"specNames",i)},expression:"scope.row.specNames"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"costPrice",label:"成本价",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{attrs:{type:"number"},model:{value:t.row.costPrice,callback:function(i){e.$set(t.row,"costPrice",i)},expression:"scope.row.costPrice"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"originalPrice",label:"原价（市场价）",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{attrs:{type:"number"},model:{value:t.row.originalPrice,callback:function(i){e.$set(t.row,"originalPrice",i)},expression:"scope.row.originalPrice"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"nowPrice",label:"现价",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{attrs:{type:"number"},model:{value:t.row.nowPrice,callback:function(i){e.$set(t.row,"nowPrice",i)},expression:"scope.row.nowPrice"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"stock",label:"库存",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-input",{attrs:{type:"number"},on:{change:function(t){e.stockChange()}},model:{value:t.row.stock,callback:function(i){e.$set(t.row,"stock",i)},expression:"scope.row.stock"}})]}}])})],1)],1):e._e(),e._v(" "),i("div",{staticClass:"className"},[i("div",[e._v("返利信息")])]),e._v(" "),i("el-form-item",{attrs:{label:"普通会员",prop:"memberPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.memberPrice,callback:function(t){e.$set(e.form,"memberPrice",t)},expression:"form.memberPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"VIP会员",prop:"vipPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.vipPrice,callback:function(t){e.$set(e.form,"vipPrice",t)},expression:"form.vipPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"总代理",prop:"agentPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.agentPrice,callback:function(t){e.$set(e.form,"agentPrice",t)},expression:"form.agentPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"区域代理",prop:"areaPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.areaPrice,callback:function(t){e.$set(e.form,"areaPrice",t)},expression:"form.areaPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"市级代理",prop:"cityPrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.cityPrice,callback:function(t){e.$set(e.form,"cityPrice",t)},expression:"form.cityPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"省级代理",prop:"provincePrice"}},[i("el-input",{attrs:{type:"number"},model:{value:e.form.provincePrice,callback:function(t){e.$set(e.form,"provincePrice",t)},expression:"form.provincePrice"}})],1),e._v(" "),i("div",{staticStyle:{width:"100%",height:"80px"}}),e._v(" "),i("el-form-item",{attrs:{label:""}}),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("修改")]),e._v(" "),i("el-button",{on:{click:e.cancel}},[e._v("取消")])],1),e._v(" "),i("div",{staticStyle:{width:"100%",height:"80px"}})],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};var m=i("vSla")(n,c,!1,function(e){i("yXnI")},null,null);t.default=m.exports},yXnI:function(e,t,i){var r=i("Q+8z");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i("8bSs")("7a2d5c8d",r,!0)}});