<template>
<div class="item-info">
  <el-row>
    <el-col :span='18' :offset='3'>
        <h4>已录入信息</h4>
        <el-table :data="itemList" :row-class-name="tableRowClassName">
            <el-table-column  prop="u_name" label="姓名" width='150'>
            </el-table-column>
            <el-table-column  prop="i_name" label="奖项" >
            </el-table-column>
             <el-table-column  prop="i_status" label="状态"  width='100'>
            </el-table-column>
            <el-table-column  label="操作" width='120'  >
            <template scope="scope">
                <el-button  
                  type="text"  
                  @click="alertOpen(scope.row)"  
                  v-if='scope.row.i_status=="已确定"'
                  size="small">查看</el-button>
                <el-button  
                  type="text"  
                  @click="confirm(scope.row.p_id)"  
                  v-if='scope.row.i_status!="已确定"'
                  size="small">确定</el-button>
                <el-button type="text" size="small" @click='open3(scope.row.p_id)'>反馈</el-button>
            </template>
            </el-table-column>
        </el-table>
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
            alertShow:false,
            showContent:''
        };
    },
    mounted:function () {
        Axios.get(this.url+'get_new_info_by_uid?u_id='+this.$cookie.get('s_id'))
        .then((res)=>{
            this.itemList = res.data;
        });
    },
    methods:{
      open3:function(pid){
          this.$prompt('请输入反馈信息', '反馈', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
          
            Axios.get(this.url+'info_feedback',{params:{
              u_id:this.$cookie.get('s_id'),
              p_id:pid,
              content:value,
              u_name:this.$cookie.get('s_name')
            }}
            )
          .then((res)=>{
              if(res.data=='success'){
            this.$message({
                    type: 'info',
                    message: '反馈完成'
                    });
              }else{
            this.$message({
                    type: 'danger',
                    message: '反馈失败'
                    });
              }
             });
          });
        },
      alertOpen:function(row){
        this.alertShow = true;
        this.showContent= '姓名：'+row.u_name+' 奖项名： '+row.i_name+' 添加时间： '+row.add_time+'  当前状态：'+row.i_status;
      },
      alertClose:function(){
        this.alertShow = false;
      },
       tableRowClassName(row, index) {
        if (row.i_status == '待确定') {
         return 'info-row';
        } 
        return '';
      },
      confirm:function(id){
         Axios.get(this.url+'comfirm_item',{params:{p_id:id}})
        .then((res)=>{
            if(res.data=='success'){
                Axios.get(this.url+'get_new_info_by_uid?u_id='+this.$cookie.get('s_id'))
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
<style>
 .item-info .el-table .info-row {
    background: #ecf5fb;
  }
</style>
<style scoped>
 .show-item{
  width: 600px;
  left: 50%;
  margin-left: -300px;
  position: absolute;
  top: 150px;
 }

</style>