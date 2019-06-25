import Test from '../pages/test'
import Login from '../pages/login'
import Layout from '../pages/layout'
import Table from '../pages/table'
import NotFound from '../pages/notFound'

const routers = [
  { path: '/', component: Login, exact: true },
  { path: '/login', component: Login },
  {
    path: '', component: Layout, routers: [
      { path: '/test', title: '测试', icon: 'user', component: Test },
      {
        path: '/', component: Login, title: '是是是', icon: 'user', routers: [
          { path: '/Table', title: 'Table', icon: 'user', component: Table },
        ]
      },
    ]
  },
  { path: '/not-found', component: NotFound },
]
export default routers
