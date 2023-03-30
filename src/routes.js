import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Pages/Main";
import VirtualCard from "./Pages/virtualCard";


export const MainRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/:id/:name" element={<VirtualCard />}/>                 
            </Routes>
        </BrowserRouter>
    )
} 