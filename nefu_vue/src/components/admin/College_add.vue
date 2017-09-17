<template>
   <div class="add_student">
  <h3>学院专业</h3>
  <el-tabs v-model="activeName" >
    <el-tab-pane label="学院添加" name="first">
         <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="学院">
              <el-input v-model="form.collegename" placeholder="学院名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addCollege">添加</el-button>
            </el-form-item>
        </el-form>
    </el-tab-pane>
    <el-tab-pane label="专业添加" name="second">
      <el-form :inline="true"  :model="form" class="demo-form-inline">
           <el-form-item label="学院">
         

            <el-select v-model="form.selectcollege" filterable placeholder="请选择">
            <el-option
              v-for="item in college"
              :key="item.c_id"
              :label="item.name"
              :value="item.c_id">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="form.proname" placeholder="添加专业"></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="addProfession">添加</el-button>
          </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>

  </div>
</template>

<script>
  import Axios from "axios"

export default {
 data() {
      return {
      college:[],
      form:{
         collegename: '',
         proname:'',
         selectcollege:''
      },
      activeName: 'first',
      a_url:'http://127.0.0.1/nefu/Admin/',
      c_url:'http://127.0.0.1/nefu/Common/get_college'
      }
    },
    mounted:function(){
       this.getCollege();
       },
    methods: {
      //获取所有学院
      getCollege() {
          Axios.get(this.c_url)
            .then((res)=>{
             this.college = res.data;
          });
      },
      //添加学院
      addCollege() {
        Axios.get(this.a_url+'add_college',
          {params:{name:this.form.collegename}})
          .then((res)=>{
           this.form.collegename = '';
            if(res.data=='success'){
               this.getCollege();
              console.log('录入成功');
            }else if(res.data=='fail'){
              console.log('录入失败');
            }
       });
      },
      //添加专业
      addProfession(){
        Axios.get(this.a_url+'add_profession',{params:{name:this.form.proname,pid:this.form.selectcollege}})
          .then((res)=>{
           this.form.proname = '';
            if(res.data=='success'){
              console.log('录入成功');
            }else if(res.data=='fail'){
              console.log('录入失败');
            }
       });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  @import '/static/css/jquery.stepy.css';
</style>
<style>
  .add_student .el-tabs{
    margin-left: 10px;
  }
  .add_student h3{
    margin-left: 10px;
  }
</style>

