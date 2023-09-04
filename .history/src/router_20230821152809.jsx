import {
    createBrowserRouter,
} from "react-router-dom";
import ChooseMood from './pages/ChooseMood';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ChooseMood />
    },
    {
        path: "/:type",
        element: <SongList />
    }
]);