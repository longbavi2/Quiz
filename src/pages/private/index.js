import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../helpers";

function PrivateDefault(){
    const token = getCookie("token");
    return (
        <>
        {token ? (<><Outlet/></>):(<Navigate to="/login"/>)}
        </>
    )
}
export default PrivateDefault;