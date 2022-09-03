import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsList } from "./pages/ProjectsList";
import { ProjectDetails } from "./pages/ProjectDetails";

import { Repo } from "./pages/scenes/01-Repo";
import { HelloWorld } from "./pages/scenes/02-HelloWorld";
import { AnimatedButton } from "./pages/scenes/03-AnimatedButton";
import { Calculator } from "./pages/scenes/04-Calculator";
import { NotFound404 } from "./pages/scenes/05-404Page";

const HOME_PATH = "/";
const PROJECTS_PATH = "/projects";

export const Router = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route  element={<ProjectsList />} />

      <Route path={PROJECTS_PATH} >
        <Route index element={<ProjectsList />} />
        <Route path=":slug" element={<ProjectDetails />} />
      </Route>

      {/* Projects Routes */}
      <Route path={`${PROJECTS_PATH}/01-repo`} element={<Repo />} />
      <Route path={`${PROJECTS_PATH}/02-hello-world`} element={<HelloWorld />} />
      <Route path={`${PROJECTS_PATH}/03-animated-button`} element={<AnimatedButton />} />
      <Route path={`${PROJECTS_PATH}/04-calculator`} element={<Calculator />} />
      <Route path={`${PROJECTS_PATH}/05-404-page`} element={<NotFound404 />} />
      <Route path={`${PROJECTS_PATH}/06-glassmorphism`} />
      <Route path={`${PROJECTS_PATH}/07-counter`} />
      <Route path={`${PROJECTS_PATH}/08-dark-light-mode`} />
      <Route path={`${PROJECTS_PATH}/09-animated-loading`} />
      <Route path={`${PROJECTS_PATH}/10-particle-js`} />
      <Route path={`${PROJECTS_PATH}/11-login-form`} />
      <Route path={`${PROJECTS_PATH}/12-image-gallery`} />
      <Route path={`${PROJECTS_PATH}/13-responsive-menu`} />
      <Route path={`${PROJECTS_PATH}/14-quiz`} />
    </Routes>
  )
};
