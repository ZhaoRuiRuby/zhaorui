<template>
  <div>
    <el-table
      :data="tableData"
      height="500"
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        label="日期"
        width="220">
      </el-table-column>

      <el-table-column
        prop="do"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import Axios from "axios"
  export default {
    name: 'stu',
    data() {
      return {
        tableData: []
      };
    },
    mounted:function(){
      Axios.get('http://127.0.0.1/nefu/Student/get_log',{params:{s_id:this.$cookie.get('s_id')}})
        .then((res)=>{
          this.tableData = res.data
        })
    },
    methods: {

    }
  }
</script>
<style>


</style>
<style scoped>


</style>
