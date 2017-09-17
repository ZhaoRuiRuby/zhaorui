<template>
  <div class="header" :style='{background:$store.state.color}'>
      <!-- <router-view></router-view> -->
      <!-- <div class="movie"> -->
      <slot>
        <button @click='aa' :style='{background:$store.state.color}'>{{$store.state.nav}}</button>
      </slot>
        
        <h2>
          <!-- <slot></slot> -->
          {{$store.state.title}}
        </h2>
      <!-- </div> -->
      
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
    aa:function(){
      // console.log('https://www.baidu.com');
      history.go(-1);
    }
  }

}
</script>

<style scoped>
 @import '../../assets/css/reset.css';

    .header {
      display: flex;
      /*background: rgb(33,150,243);*/
      height: 1rem;
      position: fixed;
      top: 0;
      width: 100%;
    }

    .header button {
      height: 1rem;
      width: 1rem;
      border: none;
      /*background: rgb(33,150,243);*/
    }

    .header h2 {
      flex: 1;
      text-indent: -1rem;
      
      text-align: center;
      line-height: 1rem;
    }

</style>
