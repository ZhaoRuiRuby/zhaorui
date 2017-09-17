<template>
<div>
	 <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo student-menu" mode="horizontal" >
	 <div class="header">
	 	<img src="../assets/img/logo.png" alt="">
	 </div>
	 <span class="title">学生综合评测系统</span>
	 <el-submenu index="2">
		   	<template slot="title">
				<span class="user-img"><img  src="this.$cookie.get('face_img')" alt=""></span>
		   		<span  class="user-name" v-text='studentName'></span>
		   	</template>
		   	<el-menu-item index="2-1" >个人中心</el-menu-item>
		    <el-menu-item index="2-2" @click='logout'>退出</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="1" @click='personas'>个人画像</el-menu-item>
	  <el-menu-item index="3" @click='input_item' v-if='isMonitor'>录入信息</el-menu-item>
	</el-menu>
	<el-button type="primary" @click='open3' class='message'>留言</el-button>
	<router-view></router-view>
</div>
</template>
<script>
import Axios from "axios"
export default {
    data() {
      return {
         activeIndex: '1',
         studentName:'',
         url:'http://127.0.0.1/nefu/Student/add_message',
         isMonitor:false
      };
    },
    mounted:function(){
    	
    	if(!this.$cookie.get('s_id')){
    		this.$router.push('/');
    		// console.log(this.$cookie.get('s_id'));
    		console.log('234');


    	}else{
    		// console.log(this.$cookie.get('s_id'));
    		console.log('123');
    		this.studentName =  this.$cookie.get('s_name');
    		if(this.$cookie.get('is_monitor')==1){
    			this.isMonitor = true;
    		}
    		this.$router.push('/student/personas');

    	}
    },
     methods: {
     	logout:function(){
     		this.$cookie.delete('s_id');
     		this.$router.push('/');
	     },
	     personas:function(){
			this.$router.push('/student/personas');
	     },
	     input_item:function(){
			this.$router.push('/student/input_item');
	     },
	     open3:function(){
	        this.$prompt('请输入留言', '留言', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	        }).then(({ value }) => {
	        	Axios.get(this.url,{params:{
	        		uid:this.$cookie.get('s_id'),
	        		content:value,
	        		u_name:this.studentName
	        	}})
		      .then((res)=>{
		         	if(res.data=='success'){
						this.$message({
			            	type: 'info',
			            	message: '感谢留言'
			          		});
		         	}else{
						this.$message({
			            	type: 'danger',
			            	message: '留言失败'
			          		});
		         	}
		         });
	          
	        });
      	}
    }
}
</script>
<style>
	.student-menu .el-menu-item{
		float: right;
	}
	.student-menu .el-submenu{
		float: right;
	}
	.student-menu .el-submenu .el-menu-item{
		min-width:100px;
	}
	.message{
		position: fixed;
		right: 0;
		top: 50%;
		z-index: 100;
	}
	
</style>
<style scoped>
	.header img{
		float: left;
	    width: 40px;
	    padding: 10px;
	}
	
	.title{
	  color: #ccc;
	  float: left;
	  font-size: 20px;
	  font-weight: normal;
	  line-height: 60px;
	  display: inline-block;
	  text-align: center;
	}
	.user-img{
		width: 40px;
		display: inline-block;
		position: relative;
		top: 10px;
		right: 15px;
	}
	.user-name{
		line-height: 60px;
		display: inline-block;

	}
	
</style>