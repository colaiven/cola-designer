import router from './router'
import { getToken } from '@/utils/auth'
import env from "/env"; // get token from cookie

const whiteList = ['/login', '/404', '/design', '/view', '/preview'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      if ('/design' === to.path && env.active === 'dev'){
        next(`/login`)
      }
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
})
