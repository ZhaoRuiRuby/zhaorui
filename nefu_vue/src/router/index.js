import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

import Stu from '@/components/student/Student' 
import Personas from '@/components/student/Personas'
import Input_item from '@/components/student/Input_item'
import Item_info from '@/components/student/Item_info'
import Class_info from '@/components/student/Class_info'
import stu_center from '@/components/student/personal_center/stu_center'
import face from '@/components/student/personal_center/face'
import password from '@/components/student/personal_center/password'
import log from '@/components/student/personal_center/log'

import Index from '@/components/admin/Index'
import Student_add from '@/components/admin/Student_add'
import Student_search from '@/components/admin/Student_search'
import College_add from '@/components/admin/College_add'
import College_search from '@/components/admin/College_search'
import College_admin from '@/components/admin/College_admin'
import Class_add from '@/components/admin/Class_add'
import Class_show from '@/components/admin/Class_show'




import Admin from '@/components/admin/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      component: Hello
    },
    
     {
      path: '/',
      component: Login
    },
    {
      path:"/student",
      redirect:'/student/personas'
    },

    {
      path: '/student',
      component: Stu,
      children:[
        {path:'/student/personas',component:Personas},
        {path:'/student/input_item',component:Input_item},
       
        {path:'/student/class_info',component:Class_info},
        {path:'/student/stu_center',component:stu_center,
          children:[
           {path:'/student/stu_center',component:Item_info},
           {path:'/student/stu_center/item_info',component:Item_info},
           {path:'/student/stu_center/face',component:face},
           {path:'/student/stu_center/password',component:password},
           {path:'/student/stu_center/log',component:log}
          ]
      },
      ]
    },
    {
      path:"/admin",
      redirect:'/admin/index'
    },
    {
      path:'/admin',
      component:Admin,
      children:[
        {path:"/admin/index", component:Index},
        {path:"/admin/student_add", component: Student_add},
        {path:"/admin/student_search", component:Student_search},
        {path:"/admin/college_add", component: College_add},
        {path:"/admin/college_search", component:College_search},
        {path:"/admin/college_admin", component:College_admin},
        {path:"/admin/class_add", component: Class_add},
        {path:"/admin/class_show", component:Class_show}

      ]
    }
    

  ]
})
