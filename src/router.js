import { Routes, Route } from "react-router-dom";
import { Home } from "./scenes/Home";
import { ProjectsList } from "./scenes/ProjectsList";
import { Repo } from "./scenes/01-Repo";

const HOME_PATH = "/";
const PROJECTS_PATH = "/projects";

export const Router = () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={PROJECTS_PATH} element={<ProjectsList />} />

      {/* Projects Routes */}
      <Route path={`${PROJECTS_PATH}/01-repo`} element={<Repo />} />
      <Route path={`${PROJECTS_PATH}/02-hello-world`} />
      <Route path={`${PROJECTS_PATH}/03-animated-button`} />
      <Route path={`${PROJECTS_PATH}/04-calculator`} />
      <Route path={`${PROJECTS_PATH}/05-404-page`} />
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
