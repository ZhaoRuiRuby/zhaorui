<template>
  <div class="photo-list">
    <ul>
      <li v-for='(photo,index) in $store.state.photoList' >
      <router-link :to="'/photo/photoimg/'+index">
        <img :src='photo.src'>
      </router-link>
        
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  // name: 'common',
  data () {
    return {
      // photoData:[]
    }
  },
  mounted(){
    // console.log(this.$route.params.id)
    this.$store.dispatch('changeTitle', ["photo","rgb(63,81,181)","<"]);
    Axios.get('static/photo-data.json').then((res)=>{
      // this.photoData = res.data.photoData;
      // console.log(res.data.photoData);
      this.$store.dispatch('photoList',res.data.photoData)

    })
  }
}
</script>

<style scoped>
 @import '../../assets/css/reset.css';
.photo-list {
  margin: 1rem 0;
  overflow: hidden;
}

.photo-list li {
  width: 3.2rem;
  float: left;
}

.photo-list img {
  width: 100%;
}
</style>
