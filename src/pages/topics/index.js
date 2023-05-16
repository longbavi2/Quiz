import { useEffect, useState } from "react";
import { getDataTopic } from "../../components/services/getTopicService";
import "./style.scss"
import { Link } from "react-router-dom";
function Topics() {
    const [topic, setTopic] = useState([]);
    useEffect(() => {
        const dataTopics = async () => {
            const result = await getDataTopic();
            setTopic(result)
        }
        dataTopics();
    }, [])
    return (
        <>
            <div className="topic">
                {topic &&
                    (<>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {topic.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <Link to={`/quiz/${item.id}`} >
                                                <button>Làm Bài</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>)}
            </div>
        </>
    )
}
export default Topics;