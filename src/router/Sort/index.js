const routes = [
    {
        path: '/sort',
        component: () => import('@/views/Sort'),
        children: [
            {
                path: 'select',
                component: () => import('@/views/Sort/sortitem')
            }
        ]
    },
]