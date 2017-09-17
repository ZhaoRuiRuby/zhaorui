<template>
  <div class="music">
    <common-header></common-header>
      <ul class="music-box">
        <li v-for="album in albums" @click="changeTitle(album.name)">
          <router-link :to="'/music/music_list/'+album.id">
            <img :src="album.bg" alt="">
          </router-link>
        </li>
      </ul>
      <!-- <router-view></router-view> -->
      <!--  -->
    <common-footer></common-footer>
  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'

export default {
  data() {
    return {
      albums:[]
    }
  },
  components:{
    CommonHeader,
    CommonFooter,
  },
  mounted(){
      this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
    Axios.get('../../../static/musiclist.json').then((res)=>{
      console.log(res.data.albums);
        this.albums = res.data.albums;
    });
  },
  methods:{
    changeTitle(name){
      this.$store.dispatch('changeTitle',[name,'rgb(0, 150, 136)','<']);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .music-box{
    margin: 1rem 0;
  }
  .music-box li{
      width: 50%;
      float: left;
  }
  .music-box li img{
    width: 100%;
  }

</style>
