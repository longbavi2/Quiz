import { useNavigate } from "react-router-dom";
import { addUser, postUser } from "../../components/services/addUserService";
import "./style.scss"
function Register() {
    const navigate = useNavigate();
    const ranDomString = (length) => {
        var result = "";
        const string = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        for (var i = 0; i < length; i++) {
            result += string[Math.floor(Math.random() * 60)];
        }
        return result;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = ranDomString(20);
        var fullname = e.target.elements.fullname.value;
        var email = e.target.elements.email.value;
        var password = e.target.elements.password.value;
        const options = {
            fullName: fullname,
            email: email,
            password: password,
            token: token,
        }
        const result = await addUser(email)
        if (result.length > 0) {
            alert("Email đã tồn tại")
        } else {
            const respon = await postUser("users", options).catch(err=>console.log(err))
            navigate("/login");
            alert("Đã thêm thành công");
        }
    }
    return (
        <>
            <form className="form__register" action="" onSubmit={handleSubmit}>
                <h4>
                    Đăng kí tài khoản
                </h4>
                <div className="form__group">
                    <input placeholder="Nhập họ tên" className="form__register__fullnam" name="fullname" type="text" required />
                </div>
                <div className="form__group">
                    <input placeholder="Nhập email" className="form__register__email" name="email" type="email" required />
                </div>
                <div className="form__group">
                    <input placeholder="Nhập password" className="form__register__password" name="password" type="pasword" required />
                </div>
                <button className="button__register">Tạo tài khoản</button>
            </form>
        </>
    )
}
export default Register;