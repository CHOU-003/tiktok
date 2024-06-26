//headeronly
import { HearderOnly } from "../playout"

//layout
import Home from "../page/Home"
import Following from "../page/Following"
import Profile from "../page/Profile"
import Upload from "../page/Upload"
import Search from "../page/Search"

const publicRoutes = [
    { path: "/", component:Home},
    { path: "/following", component:Following},
    { path: "/profile", component:Profile},
    { path: "/upload", component:Upload, layout: HearderOnly},
    { path: '/Search', component:Search, layout: null}

]

const privateRoutes = [

]

export { privateRoutes, publicRoutes }

