<template>
  <div class="music">
    <common-header></common-header>
    <ul class='music-box'>
      <router-link v-for='album in albums' :style="{backgroundImage:'url('+album.bg+')'}"  :to='"/music/music_list/"+album.id'>
      </router-link>
    </ul>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import Axios from 'axios'

export default {
  name: 'common',
  data () {
    return {
      albums:[]
    }
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  mounted(){
    this.$store.dispatch('changeTitle', ["music","rgb(0,150,136)","<"]);
    Axios.get('../../../static/musiclist.json').then((res)=>{
      this.albums = res.data.albums;
      console.log(this.albums);
    })
  }
}
</script>

<style scoped>
 @import '../../assets/css/reset.css';
 .music-box {
  margin-top: 1rem;
 }

 .music-box a {
  width: 3.2rem;
  height: 3.2rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  float: left;
 }

</style>
