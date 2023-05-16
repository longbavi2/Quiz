import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { useSelector } from "react-redux";
import "./style.scss"
function Layout(){
    const token = useSelector(state =>state.authenReducer)
    return (
        <>
        <div className="layout">
            <Header/>
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </div>
        </>
    )
}
export default Layout;