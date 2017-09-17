<template>
  <div class="login wrapper" >
  <div class="header">
    <div>
      <img src="../assets/img/logo.png" alt="">
      <span>东北林业大学学生综合评测系统</span>
    </div>
      
  </div>
  <div class="content">
    <div class="login-box-up">
       <el-tabs v-model="activeName"  class="select">
      <el-tab-pane label="学生登录"  name="first"><div class="login-box-down">
      学号：<input type="text" placeholder="请输入学号" v-model='student.num'><br/>
      密码：<input type="password" placeholder="请输入密码" v-model='student.psd'><br/>
       <el-button  class="subm" type="success" @click='studentLogin'>登录</el-button> 
    </div></el-tab-pane>
      <el-tab-pane label="管理员"  name="second"><div class="login-box-down">
      学号：<input type="text" placeholder="请输入账号" v-model='admin.num'><br/>
      密码：<input type="password" placeholder="请输入密码" v-model='admin.psd'><br/>
      <el-button  class="subm" type="success" @click='adminLogin'>登录</el-button>
    </div></el-tab-pane>
  </el-tabs>

    </div>
  </div>
  </div>
</template>

<script>
  import Axios from "axios"

export default {
    data() {
      return {
        activeName: 'first',
        student:{
          num:'',
          psd:''
        },
        admin:{
          num:'',
          psd:''
        },
        s_url:'http://127.0.0.1/nefu/Student/student_login',
        a_url:'http://127.0.0.1/nefu/Admin/admin_login'
      };
    },
    methods:{
      //学生登录
      studentLogin:function(){
        Axios.get(this.s_url,{params:{
          stu_num:this.student.num,
          stu_psd:this.student.psd
        }})
        .then((res)=>{
            this.student.psd='';
            if(res.data=='fail'){
               this.student.num='';
               this.$message({
                  showClose: true,
                  message: '账号不存在',
                  type: 'error'
              });
            }else if(res.data=='error'){
               this.$message({
                  showClose: true,
                  message: '密码错误',
                  type: 'warning'
              });
            }else{
              this.$cookie.set('s_id',res.data.s_id,1);
              this.$cookie.set('s_name',res.data.s_name,1);
              this.$cookie.set('class_id',res.data.class_id,1);
              this.$cookie.set('is_monitor',res.data.is_monitor,1);
              this.$cookie.set('face_img',res.data.img,1),
              this.$router.push("/student");
            }
          });
      },
      //管理员登录
        adminLogin:function(){
        Axios.get(this.a_url,{params:{
          adm_num:this.admin.num,
          adm_psd:this.admin.psd
        }})
        .then((res)=>{
            this.admin.psd='';
            if(res.data=='fail'){
               this.admin.num='';
               this.$message({
                  showClose: true,
                  message: '账号不存在',
                  type: 'error'
              });
            }else if(res.data=='error'){
               this.$message({
                  showClose: true,
                  message: '密码错误',
                  type: 'warning'
              });
            }else{
             this.$cookie.set('a_id',res.data.a_id,1);
             this.$cookie.set('a_name',res.data.name,1);
             this.$cookie.set('genre',res.data.genre,1);
             this.$router.push("/admin");
            }
          });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .login-box-up .subm{
    margin-top: 25px;
    background-color: #556765;
    border-color: #556765;
  }
  .select .el-tabs__item.is-active{
      color: #000;
  }
  .select .el-tabs__item{
    width: 200px;
    color: #ccc;
    text-align: center;
  }
  .select .el-tabs__active-bar{
    width: 200px;
     background-color: #556765;
  }
</style>
<style scoped>
.wrapper{
  width: 960px;
  margin: 0 auto;
}
.header{
  text-align: center;
}
.header,.content{
  margin: 0 auto;
}
.header{
  padding-top: 60px;
  display: flex;
}
.header div{  
    margin: 0 auto;
}
.header img{
    width: 65px;
}
.header span{
  font-size: 24px;
  font-weight: normal;
  line-height: 75px;
  display: inline-block;
  padding-left: 15px;
}
.content{
  width: 400px; 
}
.login-box-up{
 padding-top: 20px;
}
.login-box-up .sel{
  padding: 0 99px;
}
.stu-login{
  float: left;
  width: 50%;
  text-align: center;
  line-height: 50px;
}
.tea-login{
  float: left;
  width: 50%;
  text-align: center;
  line-height: 50px;
}
.stu-login{
  background: #eee;
}
.content input{
  width: 280px;
  height: 30px;
  margin-top: 30px ;
  text-indent: 15px;
}
.login-box-down{
  margin-top: 50px;
  text-align: center;
}
.login-box-down .subm{
  width: 70px;
  height: 35px;
  text-align: center;
}
</style>

