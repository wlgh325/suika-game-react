import {useRoutes} from "react-router-dom";
import * as pages from "../pages"
import {observer} from "mobx-react-lite";

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <pages.Home/>
        }
    ])
}

export default observer(Router)