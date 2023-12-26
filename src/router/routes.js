
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'search', component: () => import('pages/SearchPage.vue') },
      { path: 'search/:type/:keyword', component: () => import('pages/SearchPage.vue') },
      {
        path: '/subject/:id',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('layouts/AnimeLayout.vue'),
            children:[
              {path:'',component:()=>import('pages/anime_page/DetailsPage.vue')},
              {path:'episodes',component:()=>import('pages/anime_page/EpisodesPage.vue')},
              {path:'characters',component:()=>import('pages/anime_page/CharacterPage.vue')}
            ]
          }
        ]
      },
      {
        path: 'character/:cid',
        component: ()=>import('layouts/MainLayout.vue'),
        children: [{path:'',component:()=>import('pages/CharactersPage.vue')}]
      }
    ]
  },
  {
    path:'/episode/:eid',
    component:()=>import('layouts/MainLayout.vue'),
    children: [{path: '',component:()=>import('pages/EpisodeDetailPage.vue')}]
  },
  {
    path:'/character/:cid',
    component:()=>import('layouts/MainLayout.vue'),
    children: [{path: '',component:()=>import('pages/anime_page/CharacterPage.vue')}]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
