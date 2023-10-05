/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-loop-func */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnswersById, getTopics } from "../../components/services/getAnswersById";
import { getDataQuestionById } from "../../components/services/getQuestionService";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./style.scss"
function Result() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [dataInfo, setDataInfo] = useState({});
    useEffect(() => {
        let count = 0;
        const dataAnswersById = async () => {
            const dataAnswer = await getAnswersById(id);
            const dataQuestions = await getDataQuestionById(dataAnswer.data[0].topicId)
            const dataTopics = await getTopics();
            let options = [];
            for (let i = 0; i < dataQuestions.data.length; i++) {
                let itemQuestions = dataQuestions.data[i]
                itemQuestions.correctAnswer = parseInt(itemQuestions.correctAnswer)
                options.push({
                    ...itemQuestions,
                    ...dataAnswer.data[0].answers[i],
                    ...dataTopics.data.find(item => item._id === dataQuestions.data[0].topicId),
                    id: dataQuestions.data[i]._id
                })
            }
            for (let j = 0; j < options.length; j++) {
                count += options[j].answer === options[j].correctAnswer ? 1 : 0;
            }
            const info = {
                count: count,
                length: options.length,

            };
            setDataInfo(info);
            setData(options);
        }
        dataAnswersById();
    }, [])
    return (
        <>
            {data.length > 0 ? (<>
                <h2>
                    Danh sách câu hỏi {data[0].name}
                </h2>
                <div>
                    <span>Đúng: <strong>{dataInfo.count}</strong></span>
                    <span> | Sai: <strong>{dataInfo.length - dataInfo.count}</strong></span>
                    <span> | Tổng số câu: <strong>{dataInfo.length}</strong></span>
                    <span> | Tỷ lệ đúng: <strong>{Math.floor(dataInfo.count / dataInfo.length * 100)}%</strong></span>
                </div>
                <form action="" >
                    {
                        data.map((item, index) => (
                            <div className="item" key={item.id}>
                                <span>
                                    <label htmlFor="">Câu {index + 1}: {item.question}</label>
                                    {item.answer === item.correctAnswer ?
                                        (<>
                                            <span className="question__true">
                                                Đúng
                                            </span>
                                        </>) :
                                        (<>
                                            <span className="question__false">
                                                Sai
                                            </span>
                                        </>)}
                                    {item.answers.map((answers, i) => {
                                        let checked = false;
                                        let className = "";
                                        if (item.answer === i) {
                                            checked = true;
                                            className = "answer__select"
                                        }
                                        if (item.correctAnswer === i) {
                                            className = "answer__true"
                                        }
                                        if (item.answer === item.correctAnswer) {
                                            className += " answer__select--true"
                                        }
                                        return (
                                            <div key={i}>
                                                <input type="radio"
                                                    checked={checked}
                                                    disabled
                                                    className={className}
                                                />
                                                <label className={className}>{answers}</label>
                                            </div>
                                        )
                                    })}
                                </span>
                            </div>
                        ))
                    }
                    <Link to={`/quiz/${data[0].topicId}`}>
                        <button type="submit" >Làm lại</button>
                    </Link>
                </form>
            </>) : (<>
                {[...Array(8)].map((item, index) => (
                    <div key={index} className="item">
                        <Skeleton width="100%" height="50px" />
                    </div>
                ))}
            </>)}
        </>
    )
}
export default Result;