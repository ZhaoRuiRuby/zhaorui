<template>
  <div class="add_student">
  <h3>添加班级</h3>
      <el-form :inline="true"  :model="form" class="demo-form-inline">
           <el-form-item label="学院">
            <el-select v-model="selectcollege" filterable placeholder="请选择">
            <el-option
              v-for="item in college"
              :key="item.c_id"
              :label="item.name"
              :value="item.c_id">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="专业">
           <el-select v-model="form.selectprofession" filterable placeholder="请选择">
            <el-option
              v-for="item in profession"
              :key="item.c_id"
              :label="item.name"
              :value="item.c_id">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="班级">
            <el-input v-model="form.classname" placeholder="添加班级"></el-input>
          </el-form-item>
            <button class="btn btn-info" @click="addClass" type="button">添加</button>
      </el-form>
  </div>
</template>

<script>
  import Axios from "axios"

export default {
 data() {
      return {
      college:[],
      profession:[],
      selectcollege:'',
      form:{
         classname:'',
        selectprofession:''
      },
      c_url:'http://127.0.0.1/nefu/Common/',
      a_url:'http://127.0.0.1/nefu/Admin/add_class'
      }
    },
    watch: {
      selectcollege(val) {
       this.getPro(val);
       this.form.selectprofession = '';
      }
    },
    mounted:function(){
       this.getCollege();
    },
    methods: {
      //获取所有学院
      getCollege() {
          Axios.get(this.c_url+'get_college')
            .then((res)=>{
             this.college = res.data;
          });
      },
      // 获取专业
      getPro(pid){
        Axios.get(this.c_url+'get_profession?pid='+pid)
            .then((res)=>{
             this.profession = res.data;
          });
      },

      //添加班级
      addClass(){
        Axios.get(this.a_url,{params:{
          c_id:this.form.selectprofession,
          name:this.form.classname}})
          .then((res)=>{
              if(res.data=='success'){
                this.form.classname = '';
                console.log('插入成功');
              }
       });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
 
</style>
<style>
  .add_student .el-form{
    margin-left: 10px;
  }
  .add_student h3{
    margin-left: 10px;
  }
</style>