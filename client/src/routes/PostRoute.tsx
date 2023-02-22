import React from "react";
import { Route, Routes } from "react-router-dom";
import PostPage from "../pages/post/PostPage";
import PostHomePage from "../pages/post";
import PostId from "../pages/post/PostId";

type Props = {};

const TasksRoute = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostHomePage />}>
          <Route path=":id" element={<PostPage />} />
          <Route path=":id/update" element={<PostId />} />
          <Route path="/create" element={<PostId />} />
        </Route>
      </Routes>
    </>
  );
};

export default TasksRoute;
