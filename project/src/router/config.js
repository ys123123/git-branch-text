import Home from '../views/home/Home'
import Order from '../views/order/Order'
import Financial from '../views/financial/Financial'
import Login from '../views/login/Login'

import Loan from '../views/order/pages/Loan'
import Transfer from '../views/order/pages/Transfer'
import Insurance from '../views/order/pages/Insurance'

const routes=[
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/order',
    component:Order,
    children:[
      {
        path:'/order',
        redirect:'/order/loan'
      },
      {
        path:'/order/loan',
        component:Loan
      },
      {
        path:'/order/transfer',
        component:Transfer
      },
      {
        path:'/order/insurance',
        component:Insurance
      }
    ]
  },
  {
    path:'/financial',
    component:Financial
  },
  {
    path:'/login',
    component:Login
  }
]

export default routes