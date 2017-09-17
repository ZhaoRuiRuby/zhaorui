<template>
  <div class="photo-datil">
    <common-header></common-header>
    <v-touch @swiperight='prev' @swipeleft='next' :style='bgStyle' class="photo-box">

    </v-touch>
    <!-- {{$route.params.index}} -->
  </div>
</template> 

<script>
import CommonHeader from '../common/CommonHeader'

export default {
  // name: 'common',
  data () {
    return {
        index:this.$route.params.index
        // 为何在上述语句末尾加逗号
    }
  },
  components: {
    CommonHeader
  },
  mounted(){
console.log(this.index)
  },
  computed:{
    bgStyle(){
      return {
        
        background:"url('"+this.$store.state.photoList[this.index].src+"') no-repeat center/contain #000"
      }
    }
  },
  methods:{
    next(){
      this.index++;
      if (this.index==this.$store.state.photoList.length) {
        this.index = 0;
      };
    },
    prev(){
      this.index--;
      if (this.index == -1) {
        this.index = this.$store.state.photoList.length-1;
      };
    }
  }

}
</script>

<style scoped>
 @import '../../assets/css/reset.css';
  .photo-box {
    position: absolute;
    top: 1rem;
    bottom: 0;
    width: 100%;
  }
</style>
