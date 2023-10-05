import { getDataUserLogin } from "../../components/services/getUser";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies, setCookie } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { AuthenStatus } from "../../actions/authenAction";
import { AiFillEye } from "react-icons/ai";
import "./style.scss"
import { useState } from "react";
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [eye, setEye] = useState(true);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements[0].value;
        const passwword = e.target.elements[1].value;
        const respon = await getDataUserLogin(name, passwword);
        if (respon.data.length > 0) {
            const time = 1;
            setCookie("token", respon.data[0].token, time);
            setCookie("id", respon.data[0]._id, time);
            setCookie("email", respon.data[0].email, time);
            dispatch(AuthenStatus(true));
            navigate("/");
        } else {
            alert("Mật khẩu hoặc tài khoản không đúng");
        }
    }
    const handleClick = () => {
        setEye(!eye);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form" action="">
                <h2>
                    Đăng nhập
                </h2>
                <div>
                    <input className="form__email" type="email" placeholder="email" />
                </div>
                <div className="form__card">
                    <input className="form__password" type={eye ? ("password") : ("text")} placeholder="Password" />
                    <span className="form__eye" onClick={handleClick}>
                        <AiFillEye />
                    </span>
                </div>
                <div>
                    <button className="button" type="subit">Đăng Nhập</button>
                </div>
            </form>

        </>
    )
}
export default Login;