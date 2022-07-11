//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public routes: everyone can use
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
// private routes: only for logged-in users
const privateRoutes = [];

export { publicRoutes, privateRoutes };
