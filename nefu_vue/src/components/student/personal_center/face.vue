<template>
<div class="face">
  <el-row>
    <el-col :span="12" ><img :src="oldFace"></el-col>
    <el-col :span="12" >
      <el-upload
        class="avatar-uploader"
        action="http://127.0.0.1/nefu/student/do_upload"
        name="userfile"
        :data="stu"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-col>
  </el-row>
  <el-row class="direction">
    <el-col :span="12">当前头像</el-col>
    <el-col :span="12">点击上传新头像</el-col>
  </el-row>
</div>
</template>
<script>
  import Axios from "axios"
  export default {
    data() {
      return {
        oldFace:this.$cookie.get('face_img'),
        imageUrl: '',
        stu:{
            s_id:this.$cookie.get('s_id')
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        if(res!='fail'){
            this.$message('上传成功!');
            this.$cookie.set('face_img',res);
            this.oldFace = res;
        }else{
            this.$message.error('上传失败!');
        }
      },
      beforeAvatarUpload(file) {
        const isPNG = file.type === 'image/png';
        const isJPG = file.type === 'image/jpeg';
        const isGIF = file.type === 'image/gif';
        const isLt2M = file.size / 1024 / 1024 < 2;
         if (!(isPNG || isJPG || isGIF)) {
          this.$message.error('上传头像格式只能是 jpg、png、gif!');
         }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return (isPNG || isJPG || isGIF) && isLt2M;
      }
    }
  }
</script>
<style>


</style>
<style>

  .avatar-uploader .el-upload {
    border: 1px dashed black;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 148px;
    height: 178px;
    display: block;
  }

  .face{
    margin-top: 50px;
  }
  .face .el-col{
    text-align: center;
  }
  .direction{
    margin-top: 50px;
  }
  .face img{
    width: 148px;
  }
</style>
