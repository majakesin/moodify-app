import {
    createBrowserRouter,
} from "react-router-dom";
import ChooseMood from 'src/pages/ChooseMood';
import SongList from 'src/pages/SongList';


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