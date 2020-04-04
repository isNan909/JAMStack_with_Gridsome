export default [
  {
    path: "/blog/post-two/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ishan/Documents/my files/tuts and samples/JAMStack Blog/JAMStack_n_Gridsome/src/templates/Post.vue")
  },
  {
    path: "/blog/post-one/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ishan/Documents/my files/tuts and samples/JAMStack Blog/JAMStack_n_Gridsome/src/templates/Post.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/ishan/Documents/my files/tuts and samples/JAMStack Blog/JAMStack_n_Gridsome/src/pages/Blog.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ishan/Documents/my files/tuts and samples/JAMStack Blog/JAMStack_n_Gridsome/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ishan/Documents/my files/tuts and samples/JAMStack Blog/JAMStack_n_Gridsome/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ishan/Documents/my files/tuts and samples/JAMStack Blog/JAMStack_n_Gridsome/node_modules/gridsome/app/pages/404.vue")
  }
]

