<template>
	<div class="footer" :style='{background:$store.state.color}'>
		<ul>
		<!-- <router-link></router-link> -->
			<li v><router-link to='/movie'>电影</router-link></li>
			<li><router-link to='/music'>音乐</router-link></li>
			<li><router-link to='/book'>书籍</router-link></li>
			<li><router-link to='/photo'>图片</router-link></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'common',
  data () {
    return {

    }
  },
  methods:{
  	changeTitle(title,color){
  		this.$store.dispatch('changeTitle',[title,color])
  		// this.$store.dispatch('changeBgColor',color)
  	}
  	
  }
}
</script>

<style scoped>
 @import '../../assets/css/reset.css';
		.footer {
			height: 1rem;
			/*background: rgb(33,150,243);*/
		}

		.footer ul {
			display: flex;
		}
		.footer ul li {
			flex: 1;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
		}

		.footer {
			bottom: 0;
			position: fixed;
			width: 100%;
			
		}
		
		.footer a {
      		color: #ccc;
      		outline: none;
    	}
    	.footer a:router-link-active {
      		color: #fff;
    	}

</style>
