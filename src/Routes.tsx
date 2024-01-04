import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"
import { Home } from "./pages/Home"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/age/" element={<Home />} />
            <Route path="/age/*" element={<Home />} />
        </ReactRoutes>
    )
}
