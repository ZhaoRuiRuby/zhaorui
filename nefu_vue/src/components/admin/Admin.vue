<template>
<div>
    <!-- left side start-->
    <div class="left-side sticky-left-side">
        <!--logo and iconic logo start-->
        <div class="logo text-center">
            <a href="index.html"><img src="../../assets/img/logo.png" alt=""></a>
        </div>
        <!--logo and iconic logo end-->
        <div class="left-side-inner">
            <!--sidebar nav start-->
            <ul class="nav nav-pills nav-stacked custom-nav">
                <li class="active"><router-link to='/admin/index'> <i class="fa fa-home"></i> <span>主页</span></router-link></li>
                <li class="menu-list"><a ><i class="fa fa-laptop"></i> <span>学院专业</span></a>
                    <ul class="sub-menu-list">
                        <li><router-link to='/admin/college_add'> 添加专业</router-link></li>
                        <li><router-link to='/admin/college_search'>查看</router-link></li>
                    </ul>
                </li>
                <li class="menu-list"><a><i class="fa fa-book"></i> <span>班级管理</span></a>
                    <ul class="sub-menu-list">
                        
                        <li><router-link to='/admin/class_add'> 添加班级</router-link></li>
                        <li><router-link to='/admin/class_show'> 查看班级</router-link></li>
                    </ul>
                </li>
                <li class="menu-list"><a><i class="fa fa-cogs"></i> <span>学生管理</span></a>
                    <ul class="sub-menu-list">
                        <li><router-link to='/admin/student_add'> 添加学生</router-link></li>
                        <li><router-link to='/admin/student_search'> 查看学生</router-link></li>
                    </ul>
                </li>
                <li class="menu-list"><a ><i class="fa fa-laptop"></i> <span>奖项管理</span></a>
                    <ul class="sub-menu-list">
                        <li><a> 添加奖项</a></li>
                    </ul>
                </li>
                <li><a @click='logout'><i class="fa fa-sign-in"></i> <span>登录页</span></a></li>

            </ul>
            <!--sidebar nav end-->
        </div>
    </div>
    <!-- left side end-->

    <!-- main content start-->
    <div class="main-content">
    <!-- header section start-->
            <div class="header-section">
            <!--toggle button start-->
            <a class="toggle-btn"><i class="fa fa-bars"></i></a>
            <!--toggle button end-->

             <!--search start-->
            <form class="searchform" action="index.html" method="post">
                <input type="text" class="form-control" name="keyword" placeholder="搜索" />
            </form>
            <!--search end-->

            <!--notification menu start -->
            <div class="menu-right">
                <ul class="notification-menu">           
                    <li>
                        <a href="#" class="btn btn-default dropdown-toggle info-number" data-toggle="dropdown">
                            <i class="fa fa-bell-o"></i>
                            <span class="badge">2</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-head pull-right">
                            <h5 class="title">通知</h5>
                            <ul class="dropdown-list normal-list">
                                <li class="new">
                                    <a href="">
                                        <span class="label label-danger"><i class="fa fa-bolt"></i></span>
                                        <span class="name">Server #1 overloaded.  </span>
                                        <em class="small">34 mins</em>
                                    </a>
                                </li>
                                <li class="new">
                                    <a href="">
                                        <span class="label label-danger"><i class="fa fa-bolt"></i></span>
                                        <span class="name">Server #3 overloaded.  </span>
                                        <em class="small">1 hrs</em>
                                    </a>
                                </li>
                               
                                <li class="new"><a href="">查看所有通知</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <img src="/static/images/photos/user-avatar.png" alt="" />
                            John Doe
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-usermenu pull-right">

                            <li ><a @click="logout"><i class="fa fa-sign-out"></i> 退出</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
            <!--notification menu end -->

            </div>
            <!-- header section end-->
           <router-view></router-view>
    </div>
    <!-- main content end-->

</div>
</template>
   
<script>
export default {
    data () {
      return {

      };
  },
  mounted:function(){
    if(!this.$cookie.get('a_id')){
        this.$router.push('/');
    }else{
        this.adminName =  this.$cookie.get('a_name');
        if(this.$cookie.get('genre')==1){
            this.genre = true;
        }
    }
  },
  methods: {
    logout:function(){
        this.$cookie.delete('a_id');
        this.$router.push('/');
    },
  }
}

</script>
<style scoped>
     @import '/static/css/style.css';
     @import '/static/css/style-responsive.css';

     @import '/static/js/iCheck/skins/minimal/minimal.css';
     @import '/static/js/iCheck/skins/square/square.css';
     @import '/static/js/iCheck/skins/square/red.css';
     @import '/static/js/iCheck/skins/square/blue.css';

     @import '/static/css/clndr.css';
    
     @import '/static/js/morris-chart/morris.css';
</style>
<style>
   div.sticky-left-side {
    height: auto;
   }
</style>