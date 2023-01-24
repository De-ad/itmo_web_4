import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./index";

const AppRouter = () => {
    let isAuth = true;

    return (
        (isAuth) ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                />
            )}
        </Routes> :
        <Routes>
            {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                    />
                )}
        </Routes>
    );
};

export default AppRouter;