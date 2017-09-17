<template>
  <div class="search_student">
  <h3>学院专业</h3>
 <el-table
    :data="college"   
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="c_id"
      label="专业id"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      prop="pid"
      label="依赖id"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="250">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  import Axios from "axios"

export default {
 data() {
      return {
      college:[],
      url:'http://127.0.0.1/nefu/Common/get_all_college'
      }
    },
    mounted:function (){
       Axios.get(this.url)
          .then((res)=>{
            this.college = res.data;
       });
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  h2{
  color: red;
}
.search_student .el-table{
  margin-left: 100px;
}
.search_student h3{
  margin-left: 10px;
}
</style>
