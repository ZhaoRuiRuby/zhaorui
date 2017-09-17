<template>
<div class="class-info">
    <el-row>
      <el-col :span='18' :offset='3'>
       <el-tabs v-model="activeName" >
              <el-tab-pane label="录入信息" name="first">
                    <el-table :data="itemList" border :row-class-name="tableRowClassName">
                        <el-table-column  prop="u_name" label="姓名" width='150'>
                        </el-table-column>
                        <el-table-column  prop="i_name" label="奖项" >
                        </el-table-column>
                         <el-table-column  prop="i_status" label="状态" width='100'>
                        </el-table-column>
                        <el-table-column  label="操作" width='160'  >
                        <template scope="scope">
                          <el-button  type="info" size="small"  @click='alertOpen(scope.row)'>查看</el-button>
                          <el-button  @click='open3(scope.row)' class="delete" type="warning"  size="small">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
              </el-tab-pane>
              <el-tab-pane label="反馈信息" name="second">
                    <el-table :data="feedback" border >
                        <el-table-column  prop="u_name" label="姓名" width='100'>
                        </el-table-column>
                        <el-table-column  prop="b_content" label="反馈内容" >
                        </el-table-column>
                         <el-table-column  prop="time" label="时间"  width='200'>
                        </el-table-column>
                    </el-table>
              </el-tab-pane>
      </el-tabs>
          
      </el-col>

    </el-row>
    <div class="show-item">
         <el-alert v-show='alertShow'
          :title="showContent"
           @close="alertClose"
          type="info">
        </el-alert>
    </div>
</div>
</template>
<script>
import Axios from "axios"
export default {
    data () {
        return {
            url:'http://127.0.0.1/nefu/Student/',
            itemList:[],
            feedback:[],
            class_id:'',
            alertShow:false,
            showContent:'',
            activeName:'first'
        };
    },
    mounted:function (row) {
        this.class_id = this.$cookie.get('class_id');
        Axios.get(this.url+'get_class_info',{params:{class_id:this.class_id}})
        .then((res)=>{
            this.itemList = res.data;
        });
         Axios.get(this.url+'get_class_feedback',{params:{class_id:this.class_id}})
        .then((res)=>{
          this.feedback= res.data;
        });
        

    },
    methods:{
      tableRowClassName(row, index) {
        if (row.i_status == '待确定') {
         return 'info-row';
        } 
        return '';
      },
       open3(row) {
        const h = this.$createElement;
        this.$msgbox({
          title: '确定删除',
          message: h('div', null, [
            h('h5', '姓名：'+row.u_name),
            h('h6', '奖项：'+row.i_name),
            h('h6', '当前状态：'+row.i_status),
            h('h6', '添加时间：'+row.add_time),

          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance,done) => {
            if (action === 'confirm') {
              this.deleteInfo(row.p_id);
              done();
            } else {
              done();
            }
          }
        });
      },
      alertOpen:function(row){
        this.alertShow = true;
        this.showContent= '姓名：'+row.u_name+' 奖项名： '+row.i_name+' 添加时间： '+row.add_time+'  当前状态：'+row.i_status;
      },
      alertClose:function(){
        this.alertShow = false;
      },
      deleteInfo:function(pid){
         Axios.get(this.url+'delete_info',{params:{p_id:pid}})
        .then((res)=>{
            if(res.data=='success'){
                Axios.get(this.url+'get_class_info',
                    {params:{class_id:this.class_id}})
                  .then((res)=>{
                      this.itemList = res.data;
               });
            }
        });
      }

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
 .class-info .el-table .info-row {
    background: #ecf5fb;
  }
  .el-tab-pane .delete{
    background:#94a7b1;
    border-color:#94a7b1;
  }
</style>
<style scoped>
 .show-item{
  width: 700px;
  left: 50%;
  margin-left: -350px;
  position: fixed;
  top: 150px;
  z-index: 100;
 }
 
  
</style>