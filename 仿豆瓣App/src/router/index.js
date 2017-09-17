import Vue from 'vue'
import Router from 'vue-router'
// import CommonHeader from '@/components/CommonHeader'
import Movie from '@/components/movie/Movie'
import MovieTop250 from '@/components/movie/MovieTop250'
import MovieHot from '@/components/movie/MovieHot'
import MovieComing from '@/components/movie/MovieComing'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MusicList from '@/components/music/Musiclist'
import PhotoImage from '@/components/photo/PhotoImage'
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/movie',
  		redirect:'/movie/top250'
  	},
  	//注意上方重定向代码，其应当放置在前方。
    {
      path: '/movie',
      // name: 'common',
      component: Movie,
      children:[
    		{path:'/movie/top250',component:MovieTop250},
    		{path:'/movie/hot',component:MovieHot},
    		{path:'/movie/coming',component:MovieComing}
      ]
    },
    {//重定向
    	path:'/',
    	redirect:'/movie/top250'
    },
    {
    	path: '/music',
      component: Music
    },
    {
      path:'/music/music_list/:id',
      component:MusicList
    },
    {
    	path: '/book',
      	component: Book
    },
    // {
    //   path:'/photo/photoimg/:index',
    //   redirect:'/photo/photoimg/:index'
    // },//关于重定向指向自身
    {
    	path: '/photo',
      	component: Photo
    }
    ,
    {
      path:'/photo/photoimg/:index',
      component:PhotoImage
    }
    
    
  ]
})
