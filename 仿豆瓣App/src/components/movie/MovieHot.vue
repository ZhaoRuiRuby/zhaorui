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
		
	</div>
</template>
<script>
	import Axios from 'axios'

	export default{
		data(){
			return {
				movieList:[]
			}
		},
		mounted:function(){
			Axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?count=10&start=0').then((res)=>{
				console.log(res);
				console.log(res.data);
				this.movieList = res.data.subjects;
				console.log(this.movieList);
			});
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

</style>