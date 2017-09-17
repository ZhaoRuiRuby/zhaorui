<template>
<div>
         <!-- page heading start-->
            <div class="page-heading">
                <h3>
                    主页
                </h3>
                <ul class="breadcrumb">
                    <li>
                        <a href="#">教师主页</a>
                    </li>
                    <li class="active"> 我的主页 </li>
                </ul>
                <div class="state-info">
                    <section class="panel">
                        <div class="panel-body">
                            <div class="summary">
                                <span>获奖总人数</span>
                                <h3 class="red-txt">200</h3>
                            </div>
                            <div id="income" class="chart-bar"></div>
                        </div>
                    </section>
                    <section class="panel">
                        <div class="panel-body">
                            <div class="summary">
                                <span>学院总人数</span>
                                <h3 class="green-txt">5000</h3>
                            </div>
                            <div id="expense" class="chart-bar"></div>
                        </div>
                    </section>
                </div>
            </div>
            <!-- page heading end-->

             <!--body wrapper start-->
            <div class="wrapper">
                <div class="row">
                    <div class="col-md-6">
                        <!--statistics start-->
                        <div class="row state-overview">
                            <div class="col-md-6 col-xs-12 col-sm-6">
                                <div class="panel purple">
                                    <div class="symbol">
                                        <i class="fa fa-bell"></i>
                                    </div>
                                    <div class="state-value">
                                        <div class="value">3</div>
                                        <div class="title">新留言</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-6">
                                <div class="panel red">
                                    <div class="symbol">
                                        <i class="fa fa-tags"></i>
                                    </div>
                                    <div class="state-value">
                                        <div class="value">0</div>
                                        <div class="title">日志</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row state-overview">
                            <div class="col-md-6 col-xs-12 col-sm-6">
                                <div class="panel blue">
                                    <div class="symbol">
                                        <i class="fa fa-male"></i>
                                    </div>
                                    <div class="state-value">
                                        <div class="value">12</div>
                                        <div class="title">班级数</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12 col-sm-6">
                                <div class="panel green">
                                    <div class="symbol">
                                        <i class="fa fa-reply"></i>
                                    </div>
                                    <div class="state-value">
                                        <div class="value">1</div>
                                        <div class="title"> 留言反馈</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--statistics end-->
                    </div>
                    <div class="col-md-6">
                        <!--more statistics box start-->
                        <div class="panel deep-purple-box">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-7 col-sm-7 col-xs-7">
                                       
                                            <div id="graph-donut" class="revenue-graph"><svg height="220" version="1.1" width="281" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="none" stroke="#4acacb" d="M140.5,176.66666666666669A66.66666666666667,66.66666666666667,0,0,0,182.07879551323234,57.88811835950217" stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path><path fill="#4acacb" stroke="none" d="M140.5,179.66666666666669A69.66666666666667,69.66666666666667,0,0,0,183.94984131132782,55.54308368567977L199.7497836063561,35.7405686622906A95,95,0,0,1,140.5,205Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#6a8bc0" d="M182.07879551323234,57.88811835950217A66.66666666666667,66.66666666666667,0,0,0,78.45101113025744,85.6203481426209" stroke-width="2" opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1;"></path><path fill="#6a8bc0" stroke="none" d="M183.94984131132782,55.54308368567977A69.66666666666667,69.66666666666667,0,0,0,75.65880663111902,84.52326380903884L47.42651669538617,73.43052221393134A100,100,0,0,1,202.86819326984852,31.832177539253266Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#5ab6df" d="M78.45101113025744,85.6203481426209A66.66666666666667,66.66666666666667,0,0,0,98.91301928453285,162.10534981569367" stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path><path fill="#5ab6df" stroke="none" d="M75.65880663111902,84.52326380903884A69.66666666666667,69.66666666666667,0,0,0,97.04160515233681,164.45009055739988L81.2385524804593,184.25012348736345A95,95,0,0,1,52.08019086061685,75.25899610323478Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#fe8676" d="M98.91301928453285,162.10534981569367A66.66666666666667,66.66666666666667,0,0,0,140.47905604932066,176.66666337679857" stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path><path fill="#fe8676" stroke="none" d="M97.04160515233681,164.45009055739988A69.66666666666667,69.66666666666667,0,0,0,140.4781135715401,179.6666632287545L140.47015487028193,204.99999531193794A95,95,0,0,1,81.2385524804593,184.25012348736345Z" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="140.5" y="100" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: 800; font-stretch: normal; font-size: 15px; line-height: normal; font-family: Arial;" font-size="15px" font-weight="800" transform="matrix(0.9346,0,0,0.9346,9.1918,7.2623)" stroke-width="1.0700061274509804"><tspan style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" dy="6">毕业生去向</tspan></text><text x="140.5" y="120" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Arial;" font-size="14px" transform="matrix(1.1806,0,0,1.1806,-25.3652,-20.2222)" stroke-width="0.8470588235294118"><tspan dy="5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"> </tspan></text></svg>
                                            </div>
                                    </div>
                                    <div class="col-md-5 col-sm-5 col-xs-5">
                                        <ul class="bar-legend">
                                            <li><span class="blue"></span> 考研</li>
                                            <li><span class="green"></span> 就业</li>
                                            <li><span class="purple"></span> 其他</li>
                                            <li><span class="red"></span> 保研</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--more statistics box end-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="panel">
                            <div class="panel-body">
                                <div class="calendar-block ">
                                    <div class="cal1">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="panel">
                            <header class="panel-heading">
                                待回复留言
                                <span class="tools pull-right">
                                    <a class="fa fa-chevron-down" href="javascript:;"></a>
                                    <a class="fa fa-times" href="javascript:;"></a>
                                 </span>
                            </header>
                            <div class="panel-body">
                                <ul class="to-do-list" id="sortable-todo">
                                    <li class="clearfix">
                                        <span class="drag-marker">
                                        <i></i>
                                        </span>
                                        <div class="todo-check pull-left">
                                            <input type="checkbox" value="None" id="todo-check"/>
                                            <label for="todo-check"></label>
                                        </div>
                                        <p class="todo-title">
                                            学生获奖问题处理
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">

                                            <a href="#" class="todo-remove"><i class="fa fa-times"></i></a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <span class="drag-marker">
                                        <i></i>
                                        </span>
                                        <div class="todo-check pull-left">
                                            <input type="checkbox" value="None" id="todo-check1"/>
                                            <label for="todo-check1"></label>
                                        </div>
                                        <p class="todo-title">
                                            学生住宿问题
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">

                                            <a href="#" class="todo-remove"><i class="fa fa-times"></i></a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <span class="drag-marker">
                                        <i></i>
                                        </span>
                                        <div class="todo-check pull-left">
                                            <input type="checkbox" value="None" id="todo-check2"/>
                                            <label for="todo-check2"></label>
                                        </div>
                                        <p class="todo-title">
                                            学生住宿问题
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">

                                            <a href="#" class="todo-remove"><i class="fa fa-times"></i></a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <span class="drag-marker">
                                        <i></i>
                                        </span>
                                        <div class="todo-check pull-left">
                                            <input type="checkbox" value="None" id="todo-check3"/>
                                            <label for="todo-check3"></label>
                                        </div>
                                        <p class="todo-title">
                                            年级大会
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">

                                            <a href="#" class="todo-remove"><i class="fa fa-times"></i></a>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <span class="drag-marker">
                                        <i></i>
                                        </span>
                                        <div class="todo-check pull-left">
                                            <input type="checkbox" value="None" id="todo-check4"/>
                                            <label for="todo-check4"></label>
                                        </div>
                                        <p class="todo-title">
                                            学院活动问题
                                        </p>
                                        <div class="todo-actionlist pull-right clearfix">

                                            <a href="#" class="todo-remove"><i class="fa fa-times"></i></a>
                                        </div>
                                    </li>

                                </ul>
                                <div class="row">
                                    <div class="col-md-12">
                                        <form role="form" class="form-inline">
                                            <div class="form-group todo-entry">
                                                <input type="text" placeholder="增加新事项" class="form-control" style="width: 100%">
                                            </div>
                                            <button class="btn btn-primary pull-right" type="submit">+</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        
                        <div class="panel">
                            <div class="panel-body">
                                <div class="media usr-info">
                                    <a href="#" class="pull-left">
                                        <img class="thumb" src="/static/images/photos/user2.png" alt=""/>
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">Mila Watson</h4>
                                        <span>教授</span>
                                        <p>任职11年</p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer custom-trq-footer">
                                <ul class="user-states">
                                    <li>
                                        <i class="fa fa-heart"></i> 127
                                    </li>
                                    <li>
                                        <i class="fa fa-eye"></i> 853
                                    </li>
                                    <li>
                                        <i class="fa fa-user"></i> 311
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--body wrapper end-->

            <router-view></router-view>

</div>
</template>
   
<script>
export default {
    data () {
      return {
      }
  },
  mouted:function(){
    this.$router.go(0);
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
    
     /*@import '/static/js/morris-chart/morris.css';*/
</style>
<style>
   div.sticky-left-side {
    height: auto;
   }
</style>