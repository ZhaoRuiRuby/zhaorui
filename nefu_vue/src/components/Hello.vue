<template>
  <div class="hello">
  
    <ul id="items1">
      <li v-for='item in items1' @click="changeItem2(item.id)">{{item.name}}</li>
    </ul>

    <ul id='items2'>
    <input type="text">
       <li v-for='item in items2' @click="changeItem3(item.id)">{{item.name}}</li>
    </ul>
    
    <ul id="items3">
    <input type="text">
       <li v-for='item in items3' @click="ClassInfo(item.name)">{{item.name}}</li>
    </ul>
    <div style="clear: both;">
      <el-button type='info' @click="add">重置</el-button>
      <el-button type='success' @click="show">显示</el-button>
      <el-button type='danger' @click="deleteCookie">删除</el-button>
    </div>
    
  </div>
</template>

<script>
  import $ from 'jquery'
  import Axios from "axios"
export default {
    data () {
      return {
        items1:[],
        items2:[],
        items3:[],
        url:'http://127.0.0.1/nefu/Common/get_item_by_pid?pid=',
        pid:0,
      };
  },
  mounted:function () {
      Axios.get(this.url+this.pid)
      .then((res)=>{
         this.items1 = res.data;
           Axios.get(this.url+this.items1[0].id).then((res)=>{
              this.items2 = res.data;
                  Axios.get(this.url+this.items2[0].id).then((res)=>{
                   this.items3 = res.data;
               });
           });
       });
    },
    methods:{
      add:function(){
          this.$cookie.set('name',this.pid++);
      },
     
      show:function(){
          console.log(this.$cookie.get('name'));
      },
      deleteCookie:function(){
          this.$cookie.delete('name');
      },
      ClassInfo:function(id){
        console.log(id);
      },
      changeItem3:function(pid){
        Axios.get(this.url+pid)
      .then((res)=>{
          this.items3 = res.data;
       });
      },
      changeItem2:function(pid){
        Axios.get(this.url+pid)
      .then((res)=>{
          this.items2 = res.data;
          this.changeItem3(res.data[0].id);
       });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  cursor: pointer;
  float: left;
  margin-right: 0px;
  border: 1px solid #ccc;
}
#items1 li{
  background: #666;
  padding: 5px 10px 5px 5px;
  color: #fff;
  /*border-bottom: 1px solid #efefef;*/
}
#items2 li{
  background: #999;
  color: #fff;
  padding-left: 10px;
}
#items3 li{
  background: #666;
  color: #fff;
  padding-left: 10px;
}
a {
  color: #42b983;
}
</style>
