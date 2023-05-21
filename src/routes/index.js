import Layout from "../components/Layout";
import Logout from "../components/Logout";
import Login from "../pages/Login";
import Answers from "../pages/answers";
import Home from "../pages/home";
import PrivateDefault from "../pages/private";
import Questions from "../pages/questions";
import Quiz from "../pages/quiz";
import Register from "../pages/register";
import Result from "../pages/result";
import Topics from "../pages/topics";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/topics",
                element: <Topics />
            },
            {
                path: "/answers",
                element: <Answers />
            },
            {
                path: "/questions",
                element: <Questions />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/logout",
                element: <Logout />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "*",
                element: <Login />
            },
            {
                element: <PrivateDefault />,
                children: [
                    {
                        path: "quiz/:id",
                        element: <Quiz />
                    },
                    {
                        path: "result/:id",
                        element: <Result />
                    }
                ]
            },
        ]
    }
];
export default routes;
