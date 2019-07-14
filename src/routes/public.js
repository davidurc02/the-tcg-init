import MiniDrawer from '../components/templates/MiniDrawer'
import SectionOption1 from '../components/organisms/SectionOption1'
import SectionOption2 from '../components/organisms/SectionOption2'
import SectionOption3 from '../components/organisms/SectionOption3'

export const publicRoutes = [
    {
        path: '/',
        exact: true,
        component: MiniDrawer,
        routes: [
            {
                path: '/option1',
                component: SectionOption1,
            },
            {
                path: '/option2',
                component: SectionOption2,
            },
            {
                path: '/option3',
                component: SectionOption3,
            },
        ]
    },
];

export const fallbackRoute = [
    {
        component: MiniDrawer,
    },
];