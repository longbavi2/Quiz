import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { AuthenStatus } from "../../actions/authenAction";
import { useEffect } from "react";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        deleteAllCookies();
        dispatch(AuthenStatus(false));
        navigate("/login");
    })
    return <></>;
  }
  
  export default Logout;
  