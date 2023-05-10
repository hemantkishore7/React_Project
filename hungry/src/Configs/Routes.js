import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RestaurantDetails from "../Pages/RestaurantDetails";

export const openRoutes = [
    {
        name: 'Login | signup',
        id: 'login',
        component : <Login/>,
        path:'/'
    }
]

export const closedRoutes =[
    {
        name : 'Home',
        id : 'home',
        component : <Home/>,
        path: '/'
    },
    {
        name : 'Cart',
        id : 'cartDetails',
        component : <Cart/>,
        path: '/cart/:id'
    },
    {
        name : 'RestaurantDetails',
        id : 'restaurantDetails',
        component : <RestaurantDetails/>,
        path: '/restaurant/:id'
    }
]