const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/book',
        component: () => import('pages/BookList.vue'),
        // alias: 'book-test',
        name: 'book-test'
      },
      {
        path: '/book/:id',
        name: 'bookId',
        component: () => import('pages/BookPage.vue'),
        props: true
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
