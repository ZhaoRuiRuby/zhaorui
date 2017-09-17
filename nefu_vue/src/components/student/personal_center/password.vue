<template>
  <div class="pwd">
    <el-row>
      <el-col :span="23" :offset="1">
        <div style="margin: 50px;"></div>
        <el-form :label-position="labelPosition" label-width="110px" :model="pwd">
          <el-form-item label="密码">
            <el-input type="password" v-model="pwd.old" @blur="checkOld"><el-button slot="append">确认</el-button></el-input>
            <i :class="pwd.oldIcon"></i>
            <span v-show="checkRule.isShow1">密码错误</span>
          </el-form-item>
          <div style="margin: 30px;"></div>
          <el-form-item label="新密码">
            <el-input type="password" v-model="pwd.new1" :disabled="isClose"></el-input>
            <span v-show="checkRule.isShow2">不能为空！</span>
            <span v-show="checkRule.isShow3">原密码与新密码相同！</span>
          </el-form-item>
          <div style="margin: 30px;"></div>
          <el-form-item label="再次输入新密码">
            <el-input type="password" v-model="pwd.new2" :disabled="isClose"></el-input>
            <span v-show="checkRule.isShow4">两次输入不一致！</span>
          </el-form-item>
          <div style="margin: 30px;"></div>
          <el-form-item >
            <el-button :disabled="isClose" style="width: 100px" size="large" type="primary" @click="onSubmit" >确认</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Axios from "axios"
  import qs from 'qs'
  export default {
    name: 'stu',
    data() {
      return {
        labelPosition: 'right',
        isClose:true,
        checkRule:{
          isShow1:false,
          isShow2:false,
          isShow3:false,
          isShow4:false,
        },
        pwd: {
          old: '',
          new1: '',
          new2: '',
          oldIcon:''
        }
      };
    },
    methods: {
      checkOld:function () {
        this.pwd.oldIcon = 'el-icon-loading';
        Axios.get('http://127.0.0.1/nefu/Student/check_pwd',{params:{s_id:this.$cookie.get('s_id'),pwd:this.pwd.old}})
          .then((res)=>{
            if(res.data=='success'){
              this.pwd.oldIcon = 'el-icon-check';
              this.checkRule.isShow1 = false;
              this.isClose = false
            }else{
              this.pwd.oldIcon = 'el-icon-close';
              this.checkRule.isShow1 = true;
              this.isClose = true;
              let cR = this.checkRule;
              for( let p in cR ){
                  if( p != 'isShow1' ){
                    cR[p] = false
                  }
              }
            }
          });
      },
      onSubmit:function () {
        if(this.pwd.new1=='' || this.pwd.new1=='') {
          this.checkRule.isShow2 = true
        }else{
          this.checkRule.isShow2 = false;
          if(this.pwd.new1 != this.pwd.new2){
            this.checkRule.isShow4 = true
          }else{
            this.checkRule.isShow4 = false;
            if( this.pwd.new1 == this.pwd.old ){
              this.checkRule.isShow3 = true
            }else{
              this.checkRule.isShow3 = false;
              Axios.post('http://127.0.0.1/nefu/Student/update_password',qs.stringify({
                s_id:this.$cookie.get('s_id'),pwd:this.pwd.new2
              })).then((res)=>{
                  if(res.data=='success'){
                    this.$alert('修改成功', ' ', {
                      confirmButtonText: '确定',
                      callback:()=>{
                        let pwd = this.pwd;
                        for( let p in pwd ){
                          pwd[p] = ''
                        }
                        this.isClose=true
                      }
                    });
                  }else{
                    this.$alert('修改失败', ' ', {
                      confirmButtonText: '确定'
                    });
                  }
              })
            }
          }
        }
      }
    }
  }
</script>
<style>


</style>
<style scoped>
  .pwd .el-input{
    width: 300px;
  }
</style>
