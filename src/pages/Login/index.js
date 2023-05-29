import { getDataUserLogin } from "../../components/services/getUser";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies, setCookie } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { AuthenStatus } from "../../actions/authenAction";
import "./style.scss"
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        var name = e.target.elements[0].value;
        var passwword = e.target.elements[1].value;
        const respon = await getDataUserLogin(name, passwword);
        if (respon.length > 0) {
            const time = 1;
            setCookie("token", respon[0].token, time);
            setCookie("id", respon[0].id, time);
            setCookie("email", respon[0].email, time);
            dispatch(AuthenStatus(true));
            navigate("/");
        } else {
            alert("Mật khẩu hoặc tài khoản không đúng");
        }
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
                <div>
                    <input className="form__password" type="password" placeholder="Password" />
                </div>
                <div>
                    <button className="button" type="subit">Đăng Nhập</button>
                </div>
            </form>

        </>
    )
}
export default Login;