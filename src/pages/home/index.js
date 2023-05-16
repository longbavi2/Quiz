import { Link } from "react-router-dom";
import { getCookie } from "../../helpers";
import "./style.scss"
function Home() {
    const token = getCookie("token")
    return (
        <>
            {token ? (<>
                <div>
                    <p>
                        Chúc mừng bạn đã đăng nhập thành công
                    </p>
                    <Link to="/topics">
                        <button className="btn">
                            Danh sách chủ đề
                        </button>
                    </Link>
                    <Link to="/answers">
                        <button className="btn">
                            Danh sách bài tập đã làm
                        </button>
                    </Link>
                    <p>Website trắc nghiệm online lập trình Frontend là một nền tảng trực tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm tra, trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập trình Frontend.</p>
                    <p>Đối với các lập trình viên Frontend, website trắc nghiệm online cung cấp các bài kiểm tra để giúp họ nâng cao kiến thức và kỹ năng của mình trong các công nghệ và công cụ lập trình như HTML, CSS, JavaScript, jQuery, Bootstrap, Angular, React, Vue,...</p>
                </div>
            </>) : (<>
                Xin mời đăng nhập để sử dụng
            </>)}
        </>
    )
}
export default Home;