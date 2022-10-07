import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import MovieComponent from '../component/NavbarComponent/MovieComponent/MovieComponent'
import HomeComponent from '../component/NavbarComponent/HomeComponent/HomeComponent'
import TheatersComponent from '../component/NavbarComponent/TheatersComponent/TheatersComponent'
import OrderComponent from '../component/NavbarComponent/OrderComponent/OrderComponent'
export const NavbarMenu = [
    {
        name: 'HOME',
        path: "/home",
        icon: <FontAwesomeIcon icon={faHome} />,
        component: <HomeComponent />,
        className: 'col-4'
    },
    {
        name: 'MOVIE',
        path: "/movie",
        // icon: <FontAwesomeIcon icon={faFilm} size="xs" />
        icon: <FontAwesomeIcon icon={faFilm} />,
        component: <MovieComponent />,
        className: 'col-4'
    },
    {
        name: 'THEATRES',
        path: '/theaters',
        icon: <FontAwesomeIcon icon={faVideoCamera} />,
        component: <TheatersComponent />,
        className: 'col-5'
    },
    {
        name: 'ORDERS',
        path: '/orders',
        icon: <FontAwesomeIcon icon={faCartArrowDown} />,
        component: <OrderComponent />,
        className: 'col-5'
    }
] 