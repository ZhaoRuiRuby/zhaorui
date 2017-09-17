<template>
<div class="personas">
	<el-row>
	  <el-col :span="3" :offset="1"><div class="grid-content bg-purple-light">
	  	<el-steps :space="70" direction="vertical" :active="1">
		  <el-step title="基本信息"></el-step>
		  <el-step title="学院专业"></el-step>
		  <el-step title="评奖评优"></el-step>
		  <el-step title="社团信息"></el-step>
		  <el-step title="日常生活"></el-step>
		  <el-step title="个人属性"></el-step>
		</el-steps>
	  </div></el-col>
	  <el-col :span="5">
	  	<div class="self_left">
			<div class="div1">
				<h3>基本信息</h3>
				<el-tag type="gray">Jack</el-tag>
				<el-tag type="gray">2014111111</el-tag>
				<el-tag type="gray">男</el-tag>
				<el-tag type="gray">21岁</el-tag>
				<el-tag type="gray">哈尔滨</el-tag>
			</div>
			<div class="div2">
				<h3>学院专业</h3>
				<el-tag type="gray">信息与计算机科学学院</el-tag>
				<el-tag type="gray">软件工程2班</el-tag>
				<el-tag type="gray">2014级</el-tag>
				<el-tag type="gray">21岁</el-tag>
				<el-tag type="gray">班长</el-tag>
			</div>			
			<div class="div3">
				<h3>评奖评优</h3>
				<el-tag type="gray">优秀团员</el-tag>
				<el-tag type="gray">国家助学金</el-tag>
				<el-tag type="gray">先进班干部</el-tag>
			</div>
		</div>
	  </el-col>
	  <el-col :span="8">
	  	<div class="self_mid">
	  		<img src="../../assets/img/person.png" alt="">			
			<div class="line1"></div>
			<div class="line2"></div>
			<div class="line3"></div>			
			<div class="line4"></div>
			<div class="line5"></div>
			<div class="line6"></div>
		</div>
	  </el-col>
	  <el-col :span="5">
	  	<div class="self_right">
			<div class="div4">
				<h3>社团信息</h3>
				<el-tag type="gray">动漫社社员</el-tag>
				<el-tag type="gray">校考评部长</el-tag>
				<el-tag type="gray">轮滑社社长</el-tag>
			</div>
			<div class="div5">
				<h3>个人属性</h3>
				<el-tag type="gray">音乐</el-tag>
				<el-tag type="gray">街舞</el-tag>
				<el-tag type="gray">开朗</el-tag>
			</div>
			<div class="div6">
				<h3>日常生活</h3>
				<el-tag type="gray">寝室11B 218</el-tag>
				<el-tag type="gray">寝室长</el-tag>
				<el-tag type="gray">平均日消费30元</el-tag>
			</div>
		</div>
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
         activeIndex: '1',
         a:true
      };
    },
    mounted:function(){
    	if(!this.$cookie.get('s_id')){
    		this.$router.push('/');
    	}
    },
     methods: {
     	logout:function(){
     	this.$cookie.delete('s_id');
     	this.$router.push('/');
     },
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
}
</script>
<style>
	 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<style scoped>
	.personas{
		margin-top: 50px;
	}
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
	.self_mid{
		width: 456px;
		height: 350px;
		position: relative;
	}
	.self_mid img{
		width: 150px;
		height: 150px;
		position: absolute;
		left: 153px;
		top: 100px;
	}
	.self_mid .line1{
		width: 210px;
		height: 1px;
		background: #000;
		position: absolute;
		left: -30px;
    	top: 75px;
		transform: rotate(45deg);
	}
	.self_mid .line2{
		width: 140px;
	    height: 1px;
	    background: #000;
	    position: absolute;
	    left: 0;
	    top: 174px;
	}
	.self_mid .line3{
		width: 210px;
	    height: 1px;
	    background: #000;
	    position: absolute;
	    left: -30px;
	    top: 274px;
		transform: rotate(135deg);
	}
	.self_mid .line4{
		width: 210px;
		height: 1px;
		background: #000;
		position: absolute;
		left: 277px;
		top: 75px;
		transform: rotate(135deg);
	}
	.self_mid .line5{
		width: 150px;
		height: 1px;
		background: #000;
		position: absolute;
		left: 310px;
		top: 174px;
	}
	.self_mid .line6{
		width: 210px;
		height: 1px;
		background: #000;
		position: absolute;
		left: 277px;
		top: 274px;
		transform: rotate(45deg);
	}
	.self_left{
		float: right;
	}
	.self_left div{
		width:100%;
		height: 173px;
		border-top:1px solid #000;
		position: relative;
	}
	div>h3{
		font-size: 12px;
		position: absolute;
		left: 0;
		top: -20px;
	}
	.self_right div{
		width: 100%;
		height: 173px;
		border-top:1px solid #000;
		position: relative;	
	}
	.self_right div>h3{
		position: absolute;
		left: 230px;
		top: -20px;
	}
	.personas h3{
		color: #20a0ff;
		font-weight: 700;
	}
	.el-tag{
		margin: 3px;
	}
	.self_right .el-tag{
		float: right;
	}
</style>