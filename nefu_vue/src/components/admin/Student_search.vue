<template>
  <div class="search_student">
  <h3>全部学生</h3>  
<el-table
    :data="students"  
    style="width: 80%" 
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="s_num"
      label="学号"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      prop="s_name"
      label="姓名"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      prop="s_pass"
      label="密码">
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
  import Axios from "axios"

export default {
 data() {
      return {
      students:[],
      a_url:'http://127.0.0.1/nefu/Common/all_student'
      }
    },
    mounted:function (){
       Axios.get(this.a_url)
          .then((res)=>{
            this.students = res.data;
       });
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .search_student h3{
    margin-left: 10px;
  }
  .search_student .el-table{
    margin-left: 100px;
  }
</style>
