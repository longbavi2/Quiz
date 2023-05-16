import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDataQuestionById, getDataTopicById } from "../../components/services/getQuestionService";
import { getCookie } from "../../helpers";
import { postAnswersService } from "../../components/services/postAnswers";
import "./style.scss"
function Quiz() {
    const navigate = useNavigate();
    const id = getCookie("id")
    const param = useParams();
    const [dataQuestion, setDataQuestion] = useState([]);
    useEffect(() => {
        const getDataQuestions = async () => {
            const dataQuestionbuyId = await getDataQuestionById(param.id);
            const dataTopicbuyId = await getDataTopicById(param.id)
            var options = [];
            for (var i = 0; i < dataQuestionbuyId.length; i++) {
                options.push({
                    ...dataQuestionbuyId[i],
                    ...dataTopicbuyId[0],
                    id: dataQuestionbuyId[i].id
                })
            }
            setDataQuestion(options)
        }
        getDataQuestions();
    }, [])
    const handleSubmit = async(e) => {
        e.preventDefault();
        var options = [];
        for (var i = 0; i < e.target.length; i++) {
            if(e.target[i].checked === true){
                let questionId = parseInt(e.target[i].name) + 1;
                let answer = parseInt(e.target[i].value)
                options.push({
                    questionId :questionId,
                    answer : answer
                })
            }
        }
        var ResultFinal = {
            userId : parseInt(id),
            topicId: parseInt(param.id),
            answers:options
        };
        const responPost = await postAnswersService(ResultFinal);
        if(responPost){
            navigate(`/result/${responPost.id}`)
        }

    }
    return (
        <>
            {dataQuestion.length > 0 ? (<>
                <h2>
                    Danh sách câu hỏi {dataQuestion[0].name}
                </h2>
                <form action="" onSubmit={handleSubmit}>
                    {
                        dataQuestion.map((item, index) => (
                            <div className="item" key={item.id}>
                                <span>
                                    <label htmlFor="">Câu {index + 1}: </label>
                                    {item.question}
                                    {item.answers.map((item, i) => (
                                        <div key={i}>
                                            <input type="radio"
                                                value={i}
                                                name={index}
                                                id={`quiz/${index}-${i}`}
                                                required
                                            />
                                            <label htmlFor={`quiz/${index}-${i}`}>{item}</label>
                                        </div>
                                    ))}
                                </span>
                            </div>
                        ))
                    }
                   <button type="submit" >Nộp bài</button>
                </form>
            </>) : (<></>)}
        </>
    )
}
export default Quiz;