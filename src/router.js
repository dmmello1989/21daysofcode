import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectsList } from "./pages/ProjectsList";
import { ProjectDetails } from "./pages/ProjectDetails";

import { Repo } from "./pages/scenes/01-Repo";
import { HelloWorld } from "./pages/scenes/02-HelloWorld";
import { AnimatedButton } from "./pages/scenes/03-AnimatedButton";
import { Calculator } from "./pages/scenes/04-Calculator";
import { NotFound404 } from "./pages/scenes/05-404Page";
import { Glassmorphism } from "./pages/scenes/06-Glassmorphism";
import { Countdown } from "./pages/scenes/07-Countdown";
import { DarkLightMode } from "./pages/scenes/08-DarkLightMode";
import { AnimatedLoading } from "./pages/scenes/09-AnimatedLoading";
import { ParticlesJs } from "./pages/scenes/10-Particles";
import { LoginForm } from "./pages/scenes/11-LoginForm";
import { ECommerce } from "./pages/scenes/15-E-commerce";

const HOME_PATH = "/";
const PROJECTS_PATH = "/projects";

export const Router = ({ active, toggleDarkMode }) => {
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
      <Route path={`${PROJECTS_PATH}/06-glassmorphism`} element={<Glassmorphism />} />
      <Route path={`${PROJECTS_PATH}/07-countdown`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/08-dark-light-mode`} element={<DarkLightMode toggleDarkMode={toggleDarkMode} active={active} />} />
      <Route path={`${PROJECTS_PATH}/09-animated-loading`} element={<AnimatedLoading />} />
      <Route path={`${PROJECTS_PATH}/10-particle-js`} element={<ParticlesJs />} />
      <Route path={`${PROJECTS_PATH}/11-login-form`} element={<LoginForm />} />
      <Route path={`${PROJECTS_PATH}/12-image-gallery`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/13-responsive-menu`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/14-quiz`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/15-lp-e-commerce`} element={<ECommerce />} />
      <Route path={`${PROJECTS_PATH}/16-lp-public-api`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/17-keyboard-events`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/18-password-generator`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/19-lp-unsplash-gallery`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/20-emoji-picker`} element={<Countdown />} />
      <Route path={`${PROJECTS_PATH}/21-portfolio`} element={<Countdown />} />
    </Routes>
  )
};
