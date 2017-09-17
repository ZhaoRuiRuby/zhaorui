<template>
	<div class="top-250">
		<div class="movie-list" v-for="movie in movieList">
			<div class="movie-img">
				<img :src="movie.images.large" alt="">
			</div>
			<div class="movie-title">
				<span>{{movie.title}}</span>
				<p><span v-for='genre in movie.genres'> {{genre}}</span>({{movie.year}})(平均{{movie.rating.average}}分)</p>
			</div>
		</div>
		<div class="loading" v-show='show'>
			<img src="../../assets/img/loading.gif" alt="">
		</div>
	</div>
</template>
<script>
  import Axios from 'axios'
  import $ from 'jquery'
export default {
  data() {
    return {
      movieList:[],
      show:false
    }
  },
  mounted:function() {
  	this.loadData();
    var _this = this;
    $(window).scroll(function(){
      var windowHeight =$(this).height();
      var scrollTop = $(this).scrollTop();
      var height = $(document).height();
      if(windowHeight+scrollTop>=height){
      	_this.show =true;
        _this.loadData();
      }
    })
   
  },
  methods:{
    loadData(){
      var length = this.movieList.length;
      Axios.get(API_PROXY+'https://api.douban.com/v2/movie/top250?count=10&start='+length)
      .then((res)=>{
        this.movieList = this.movieList.concat(res.data.subjects);
        console.log(res.data.subjects);
        this.show = false;
      });
    }

  }

}
</script>
<style scoped>
	.top-250 {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	.movie-list {
		padding: 0.4rem;
		margin: 0.6rem 0;
	}

	.movie-list .movie-img {
		height: 0.8rem;
		width: 0.8rem;
		float: left;
	}

	.movie-list .movie-img img {
		height: 100%;
		width: 100%;
	}

	.movie-list .movie-title {
		float: left;
		margin-left: 0.6rem;
		width: 4rem;
		border-bottom: 1px #ccc solid;
	}
	
	.loading {
		text-align: center;
	}
</style>