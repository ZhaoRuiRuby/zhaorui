<template>
  <div class="photo">
    <common-header></common-header>
   <photo-list></photo-list>
    <common-footer></common-footer>
  </div>
</template> 

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import PhotoList from './PhotoList'
// import Axios from 'axios'

export default {
  name: 'common',
  data () {
    return {

    }
  },
  components: {
    CommonHeader,
    CommonFooter,
    PhotoList
  }
  // mounted(){
  //   this.$store.dispatch('changeTitle', ["photo","rgb(63,81,181)","<"]);
  //    Axios.get('static/photo-data.json').then((res)=>{
  //     // this.photoData = res.data.photoData;
  //     console.log(res.data.photoData);
  //     this.$store.dispatch('photoList',res.data.photoData)

  //   })
  // }
}
</script>

<style scoped>
 @import '../../assets/css/reset.css';

</style>
