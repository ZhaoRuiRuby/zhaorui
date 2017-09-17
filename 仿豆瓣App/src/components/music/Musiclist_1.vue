<template>
  <div class="music-list">
    <common-header></common-header>
    <a-player :music='musicList' :narrow="false" :autoplay="true" :showlrc="3" theme="#e6d0b2"
              listmaxheight="113px" mode="random" v-if='isShow' >
    </a-player>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import Axios from 'axios'
import APlayer from 'vue-aplayer'

export default {
  name: 'common',
  data () {
    return {
      musicData:[],
      musicList:[],
      isShow:false
    }
  },
  components: {
    CommonHeader,
    CommonFooter,
    APlayer
  },

  mounted(){
    console.log(this.$route.params.id)
    this.$store.dispatch('changeTitle', ["music","rgb(0,150,136)","<"]);
    Axios.get('static/music-data.json').then((res)=>{
      this.musicData = res.data.musicData;
      // console.log(this.musicData);
      for (var i = 0; i < this.musicData.length; i++) {
        var obj = {};
        obj.title = this.musicData[i].title;
        obj.author = this.musicData[i].author;
        obj.url = this.musicData[i].src;
        obj.pic = this.musicData[i].musicImgSrc;
        obj.lrc = 'static/'+this.musicData[i].lrc;
        this.musicList.push(obj);
      }
      this.isShow = true;
      console.log(this.musicList)
    })
  }
}
</script>

<style scoped>
 @import '../../assets/css/reset.css';
 .music-box {
  margin-top: 1rem;
 }

 .music-box li {
  width: 3.2rem;
  height: 3.2rem;
  /*display: block;*/
  background-repeat: no-repeat;
  background-size: cover;
  float: left;
 }
  
  .aplayer {
    margin-top: 1rem;
  }
</style>
