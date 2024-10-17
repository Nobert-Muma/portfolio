import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
function Layout(){
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}
export default Layout;