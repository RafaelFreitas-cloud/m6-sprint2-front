import {Routes, Route} from "react-router-dom"
import { Login } from "../pages/login"
import { Dashboard } from "../pages/dashboard"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
    )
}