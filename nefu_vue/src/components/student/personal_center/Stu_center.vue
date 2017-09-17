<template>
  <div>
   
<el-row>
      <el-col :span="4" class="nav">
        <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark">
          <el-menu-item index="1" @click="item_info">信息确认</el-menu-item>
          <el-menu-item index="2" @click="face">更换头像</el-menu-item>
          <el-menu-item index="3" @click="password">修改密码</el-menu-item>
          <el-menu-item index="4" @click="log">操作记录</el-menu-item>

        </el-menu>
      </el-col>
      <el-col :span="19" class="content">
        <router-view></router-view>
      </el-col>

    </el-row>
  </div>
</template>
<script>
  import Axios from "axios"
  export default {
    name: 'stu',
    data() {
      return {
      };
    },
    mounted:function(){
     
    },
    methods: {
    item_info:function(){
      this.$router.push('/student/stu_center/item_info');
    },
    face:function () {
      this.$router.push('/student/stu_center/face');
    },
    password:function () {
      this.$router.push('/student/stu_center/password');
    },
    log:function () {
      this.$router.push('/student/stu_center/log');
    }
    }
  }
</script>

<style scoped>

  .nav{
    margin: 20px;
  }
.content{
  margin-top: 20px;
  height: 600px;
  background: #eee;
}

</style>
