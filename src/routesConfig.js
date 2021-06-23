import Home from "./pages/home/Home"
import Pokemon from "./pages/pokemon/Pokemon"
import User from "./pages/user/User"

const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/user",
        component: User,
        exact: true
    },
    {
        path: "/poke",
        component: Pokemon,
        exact: true
    }
]

export default routesConfig