<template>
  <div class="add_student">
  <h3>录入学生</h3>
  <el-row >
    <el-col :span="8">
       <el-form ref="form" :model="form" label-width="60px">
          <el-form-item label="学号">
            <el-input v-model="form.num" type='number'></el-input>
          </el-form-item>
           <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="密码">
            <el-input v-model='form.psd' ></el-input>
          </el-form-item>
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
               <el-select v-model="selectprofession" filterable placeholder="请选择">
            <el-option
              v-for="item in profession"
              :key="item.c_id"
              :label="item.name"
              :value="item.c_id">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="班级">
          

           <el-select v-model="selectclass" filterable placeholder="请选择">
            <el-option
              v-for="item in classlist"
              :key="item.id"
              :label="item.class_name"
              :value="item.id">
            </el-option>
          </el-select>

          </el-form-item>
            <button class="btn btn-info" @click="onSubmit" type="button">添加</button>
      </el-form>
    </el-col>
   
  </el-row>
  
  </div>
</template>

<script>
  import Axios from "axios"

export default {
 data() {
      return {
      selectcollege:'', 
      college:'',
      profession:'',
      classlist:'',
      selectprofession:'',
      selectclass:'',
      form:{
         name: '',
        num:'',
        psd:'12345678'
      },
      a_url:'http://127.0.0.1/nefu/Admin/add_student',
      c_url:'http://127.0.0.1/nefu/Common/',

      }
    },
     watch: {
      selectcollege(val) {
       this.getPro(val);
       this.selectprofession = '';
       this.selectclass = '';
      },
      selectprofession(val) {
        this.getClass(val);
       this.selectclass = '';
      }
      

    },
    mounted:function(){
       this.getCollege();
    },
    methods: {
      getCollege() {
          Axios.get(this.c_url+'get_college')
            .then((res)=>{
             this.college = res.data;
          });
      },
      getPro(pid){
        Axios.get(this.c_url+'get_profession?pid='+pid)
            .then((res)=>{
             this.profession = res.data;
          });
      },
      getClass(cid){
        Axios.get(this.c_url+'get_class_by_cid?cid='+cid)
            .then((res)=>{
             this.classlist = res.data;
          });
      },
      onSubmit() {
        if(this.selectclass==''||this.form.num==''||this.form.name==''){
          alert('请完善信息');
          return false;
        }
        Axios.get(this.a_url,
          {
            params:{num:this.form.num,
            name:this.form.name,
            psd:this.form.psd,
            cid:this.selectclass
          }})
          .then((res)=>{
           this.form.name = '';
           this.form.num = '';
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
  .add_student .el-form button{
    margin-left: 150px;
  }
  .add_student h3{
    margin-left: 10px;
  }
</style>
