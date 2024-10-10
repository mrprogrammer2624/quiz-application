import { HomeLayout } from "@/Layout/Home";
import { Home, QuizPage, ScoreSummary } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const TaskPilotRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <HomeLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "quiz",
              element: <QuizPage />,
            },
            {
              path: "score",
              element: <ScoreSummary />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default TaskPilotRoute;
