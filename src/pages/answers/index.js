/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-loop-func */
import { useEffect, useState } from "react";
import { getCookie } from "../../helpers";
import { dataAnswersService } from "../../components/services/dataAnswersService";
import { getDataTopic } from "../../components/services/getTopicService";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./style.scss"
function Answers() {
    const id = getCookie("id")
    const [dataAnswer, setDataAnswer] = useState([]);
    const [check, setCheck] = useState(false);
    useEffect(() => {
        const check = (length) => {
            if (length.length > 0) {
                setCheck(true)
            }
        }
        const dataAnswers = async () => {
            const dataAnswers = await dataAnswersService(id)
            const dataTopic = await getDataTopic();
            var options = [];
            for (var i = 0; i < dataAnswers.length; i++) {
                options.push({
                    ...dataAnswers[i],
                    ...dataTopic.find(item => item.id === dataAnswers[i].topicId),
                    id: dataAnswers[i].id
                })
            }
            check(options)
            setDataAnswer(options);
        }
        dataAnswers();
    }, [])
    return (
        <>
            {
                dataAnswer.length > 0 ? (
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataAnswer.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            <Link to={`/result/${item.id}`}>
                                                <button>
                                                    Xem chi tiết
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <>
                        
                    </>
                )
            }
        </>
    )
}
export default Answers;