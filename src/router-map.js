
import User from './components/component/User'
import Home from './components/component/Home'

export default function (router) {
  router.redirect({
    '/': '/user'
  })
  router.map({
    '/user': {
      component: User
    },
    '/home': {
      component: Home
      // subRoutes: {
      //   '/deviceGroupingData': {
      //     component: DeviceGroupingData
      //   },
      //   '/posterGroupingData': {
      //     component: PosterGroupingData
      //   }
      // }
    }
  })
}
