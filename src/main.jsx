import React from "react";
import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import MainPage from './pages/main/index.jsx'
import TruckPage from "./pages/truck/index.jsx";
import QuadPage from "./pages/quad/index.jsx";

import './styles/index.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "truck",
        element: <TruckPage />,
    },
    {
        path: "quad",
        element: <QuadPage />,
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </StrictMode>,
)
