import { Link, NavLink } from "react-router-dom";
import { deleteAllCookies, getCookie } from "../../helpers";
import "./style.scss";
import { FaDev, FaUser, FaRegRegistered } from "react-icons/fa";
function Header() {
    const token = getCookie("token");
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <div className="header__title">
                        <Link to="/">QuiZz</Link>
                    </div>
                </div>
                <div className="header__main">
                    <NavLink to="/topics">
                        Danh sách chủ đề
                    </NavLink>
                    <NavLink to="/answers">
                        Danh sách bài đã làm
                    </NavLink>
                </div>
                <div className="header__right">
                    {token ? (
                        <>
                            <span className="header__login">
                                <FaUser />
                                <div className="header__content">
                                    <Link to="/logout">
                                        <button>Logout</button>
                                    </Link>
                                </div>
                            </span>
                        </>
                    ) : (<>
                        <span className="header__login">
                            <div className="header__icon">
                            <FaUser />
                            </div>
                            <div className="header__content">
                                <Link to="/login">
                                    <button>Đăng nhập</button>
                                </Link>
                            </div>
                        </span>
                        <span className="header__register">
                            <div className="header__icon">
                            <FaRegRegistered />
                            </div>
                            <div className="header__content">
                                <Link to="register">
                                    <button>Đăng kí</button>
                                </Link>
                            </div>
                        </span>
                    </>)}
                </div>
            </div>
        </>
    )
}
export default Header;