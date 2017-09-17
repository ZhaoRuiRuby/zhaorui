<template>
  <div class="add_student">
  <h3>各学院管理员</h3>
  <el-tabs v-model="activeName" >
    <el-tab-pane label="管理员列表" name="first">
          <el-table
            :data="admin" 
            >
            <el-table-column
              prop="a_account"
              label="账号"
              width="150">
            </el-table-column>
           <el-table-column
              prop="name"
              label="名称"
              width="150">
            </el-table-column>
            <el-table-column
              prop="college"
              label="学院"
              width="200">
            </el-table-column>
          </el-table>
    </el-tab-pane>

    <el-tab-pane label="新增管理员" name="second">
      <el-form :inline="true"  :model="form" class="demo-form-inline">
           <el-form-item label="学院">
            <el-select v-model="form.selectcollege" filterable placeholder="请选择">
            <el-option
              v-for="item in college"
              :key="item.c_id"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="form.account" placeholder="管理员账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.psd" placeholder="管理员密码"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="form.name" placeholder="管理员名称"></el-input>
          </el-form-item>
          <br>  
          <el-form-item>
            <el-button type="primary" @click='addAdmin'>添加</el-button>
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
      admin:[],
      college:[],
      form:{
         account:'',
         selectcollege:'',
         psd:'',
         name:''
      },
      activeName: 'first',
      c_url:'http://127.0.0.1/nefu/Common/',
      a_url:'http://127.0.0.1/nefu/Admin/'
      }
    },
    mounted:function(){
       this.getAdmin();
       this.getCollege();
       },
    methods: {
      //获取管理员
      getAdmin() {
          Axios.get(this.a_url+'get_all_admin')
            .then((res)=>{
             this.admin = res.data;
          });
      },
      //获取学院
       getCollege() {
          Axios.get(this.c_url+'get_college')
            .then((res)=>{
             this.college = res.data;
          });
      },
      addAdmin(){
        Axios.get(this.a_url+'add_admin',
          {params:{
            account:this.form.account,
            psd:this.form.psd,
            college:this.form.selectcollege,
            name:this.form.name
        }})
            .then((res)=>{
              if(res.data=='success'){
                this.getAdmin();
                this.form.account = '';
                this.form.psd ='';
                this.form.selectcollege = '';
                this.form.name = '';
                console.log(res.data);

              }
             
          });
      }

      
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
 
</style>
