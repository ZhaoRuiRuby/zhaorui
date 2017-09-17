<template>
  <div class="input-item">
      <!-- 选项列表 -->
      <el-row>
        <el-col :span='3' :offset='1'>
              步骤如下：
             <el-steps :space="100" direction="vertical" :active="step">
                <el-step title="选择奖项"></el-step>
                <el-step title="选择学生"></el-step>
                <el-step title="确定奖项"></el-step>
             </el-steps>
        </el-col>
        <el-col :span="12" >
            <el-tooltip class="item" effect="dark" content="项目分类" placement="top">
                <ul id="items1">
                      <li v-for='item in items1' @click="changeItem2(item.id)">
                     {{item.name}}
                      </li>
                </ul>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="项目类别" placement="top">  
                <ul id='items2'>
                      <li v-for='item in items2' @click="changeItem3(item.id,item.name)">
                      {{item.name}}
                      </li>
                </ul>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="指标名称" placement="top">  
                <ul id="items3">
                      <li v-for='item in items3'  @click="openCheckBox(item.name,item.id)">
                      {{item.name}}
                      </li>
                </ul>
            </el-tooltip>
        </el-col>
      </el-row>

      <!-- 添加的奖项信息表 -->
      <div v-show='getItems.length' class="getitem-table">
          <h4>添加的获奖信息</h4>
          <el-table :data="getItems"  max-height="250"  >
              <el-table-column  prop="u_name" label="姓名"  width="150">
              </el-table-column>
              <el-table-column prop="i_name" label="奖项" >
              </el-table-column>
              <el-table-column  label="操作"  width='100' >
                    <template scope="scope">
                      <el-button  @click.native.prevent="deleteRow(scope.$index)"
                        type="text" size="small"> 移除 </el-button>
                    </template>
              </el-table-column>
          </el-table>
          <el-row>
              <el-col :span="6" :offset="18" class='footer'>
                  <div class="grid-content bg-purple-dark"></div>
                  <el-button @click='closeTable'>关闭</el-button>
                 <el-button type='info' @click='inputItem'>录入</el-button>
              </el-col>
          </el-row>
      </div>
     

      <!-- 选择学生弹框 -->
      <div >
          <el-collapse-transition>
            <div v-show="show3" class="student-checkbox">
              <div class="transition-box1">
                  <div class="header">
                    <el-row>
                      <el-col :span="20">
                          <strong class="title" v-text='itemName'></strong>
                      </el-col>
                      <el-col :span="1" :offset='3'>
                          <i class="el-icon-close" @click="closeCheckBox"></i>
                      </el-col>
                    </el-row>
                  </div>
                  <p>选择获奖同学</p>
                  <div class="student-list">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>

                    <el-checkbox-group v-model="checkList"  @change="handleCheckedCitiesChange">
                        <el-checkbox 
                        :label="student"
                        v-bind:key="student.s_id" 
                        v-for='(student,key) in students'>
                        {{student.s_name}}</el-checkbox>
                    </el-checkbox-group>
                  </div>
                  <div class="footer">
                      <el-button :plain="true" type="info"  @click="closeCheckBox">取消</el-button>
                     <el-button type="primary" @click='addStudent'>添加</el-button>
                  </div>
              </div>
          </div>
          </el-collapse-transition>
      </div>
   
  </div>

  </template>
 
<script>
  import Axios from "axios"
export default {
    data () {
      return {
        itemlist:[],
        items1:[],
        items2:[],
        items3:[],
        students:[],
        step:1,
        c_url:'http://127.0.0.1/nefu/Common/',
        s_url:'http://127.0.0.1/nefu/Student/input_get_item_info',
        show3: false,
        pid:0,
        itemName:'选择的奖项名称',
        checkList:[],
        checkId:'',
        getItems:[],
        itemTable:false,
        checkAll: true,
        isIndeterminate: true
      };
  },
  mounted:function () {
      if(this.$cookie.get('is_monitor')!=1){
          this.$router.push('/student');
      }else{
         Axios.get(this.c_url+'get_all_item')
        .then((res)=>{
         this.itemlist = res.data;
         this.items1 = this.checkItem(0);
         this.items2 = this.checkItem(this.items1[0].id);
         this.items3 = this.checkItem(this.items2[0].id);
         });
        Axios.get(this.c_url+'get_student_by_class_id',{params:{
          class_id:this.$cookie.get('class_id')
        }})
        .then((res)=>{
            this.students = res.data;
        });
      }
    },
  methods:{
      handleCheckAllChange:function(event) {
        this.checkList = event.target.checked ? this.students : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange:function(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.students.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.students.length;
      },
      //去重
      removeDuplicatedItem:function() {
        var r = []; 
        for(var i = 0, l = this.getItems.length; i < l; i++) { 
         for(var j = i + 1; j < l; j++) 
         
          if (this.getItems[i].i_id === this.getItems[j].i_id && this.getItems[i].u_id === this.getItems[j].u_id) j = ++i; 
         r.push(this.getItems[i]); 
         } 
         this.getItems = r;
      },
      inputItem:function(){
           Axios.get(this.s_url,{params:{info:this.getItems}})
            .then((res)=>{
              if(res.data=='success'){
                  this.$message({
                    type: 'info',
                    message: '录入完成'
                    });
                  this.itemTable = false;
                  this.step = 1;
                  this.getItems = [];
              }
              if(res.data=='fail'){
                  this.$message({
                    type: 'danger',
                    message: '录入失败'
                    });
              }
          });
      },
      deleteRow:function(index) {
        this.getItems.splice(index,1);
        if(this.getItems.length==0){
          this.itemTable = false;
        }
      },
      openCheckBox:function(name,id){
          this.itemName = name;
          this.checkId = id;
          this.show3 = true;
          this.itemTable = false;
          this.step = 2;
      },
      closeCheckBox:function(){
          this.checkList=[];
          this.show3 = false;
          this.step = 1;
      },
      openTable:function(){
          this.itemTable = true;
          this.step = 3;
      },
      closeTable:function(){
          this.itemTable = false;
          this.step = 1;
      },
      //添加学生
      addStudent:function(){
          for( var index in this.checkList){
            var obj ={
              'i_id':this.checkId,
              'i_name':this.itemName,
              'u_id':this.checkList[index].s_id,
              'u_name':this.checkList[index].s_name
            } ;
            this.getItems.push(obj);
          }
          this.removeDuplicatedItem();
          this.checkList=[];
          this.show3 = false;
      },
      checkByPid: function(item) {
          return item.pid == this.pid;
      },
      checkItem: function(pid) {
          this.pid=pid;
          return this.itemlist.filter(this.checkByPid);
      },
      changeItem2:function(pid){
          this.items2 = this.checkItem(pid);
          this.items3 = this.checkItem(this.items2[0].id);
      },
      changeItem3:function(pid){
         this.items3 = this.checkItem(pid);
      }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
      font-weight: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;
      cursor: pointer;
      float: left;
      margin-right: 0px;
    }
    .input-item{
      margin-top: 50px;
    }
    
    #items1 li,#items2 li,#items3 li{
        color: #fff;
        padding: 5px 10px;
        background-color: #6599ce;
        border-color: #6599ce;
        border-radius: 4px;
        margin: 2px 5px;
        max-width: 250px;
    }
    #items1 li:hover,#items2 li:hover,#items3 li:hover{
       background-color: #4db3ff;
    }
     .input-item .student-checkbox{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        padding-left: 50%;
      }
      .input-item .transition-box1 {
        margin-left: -300px;
        margin-top: 150px;
        width: 600px;
        height: 300px;
        border-radius: 4px;
        background-color: #efefef;
        padding: 15px 20px;
        box-sizing:  border-box;
        margin-right: 20px;
        border: 3px solid #eee;
        position: relative;
      }
      .student-list li{
        float: left;
        width: 100px;
      }
      .student-list  .el-checkbox{
        margin: 3px 0;
        width: 90px;
      }
      .transition-box1 .footer{
        position: absolute;
        bottom: 20px;
        right: 70px;
       
      }
      .look-all{
        position: absolute;
        right: 150px;
        top: 100px;
      }
      .input-item .getitem-table{
        position: absolute;
        padding: 20px 20px;
        top: 112px;
        width: 550px;
        left: 75%;
        margin-left: -320px;
        right: 0;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        z-index: 200;
      }
      .input-item .getitem-table .footer{
        margin-top: 20px;
      }
</style>
<style>
  .input-item table td{
    padding: 1px 3px;
  }
  .input-item .el-table td{
    height: 30px;
  }
</style>
