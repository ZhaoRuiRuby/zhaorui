<template>
  <div class="search_student">
  <h3>班级列表</h3>

  
<el-table
    :data="classlist"   
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="c_id"
      label="专业id"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      prop="class_name"
      label="班级名"
      sortable
      width="150">
    </el-table-column>
    
  </el-table>

  </div>
</template>

<script>
  import Axios from "axios"

export default {
 data() {
      return {
      classlist:[],
      c_url:'http://127.0.0.1/nefu/Common/get_all_class'
      }
    },
    mounted:function (){
       Axios.get(this.c_url)
          .then((res)=>{
            this.classlist = res.data;
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
