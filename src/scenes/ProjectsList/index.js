import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import * as S from "./styles";

const list = [
  {
    number: "01",
    image: "",
    title: "Repo",
    slug: "01-repo"
  },
  {
    number: "02",
    image: "",
    title: "Hello World",
    slug: "02-hello-world"
  },
  {
    number: "03",
    image: "",
    title: "Animated Button",
    slug: "03-animated-button"
  },
  {
    number: "04",
    image: "",
    title: "Calculator",
    slug: "04-calculator"
  },
  {
    number: "05",
    image: "",
    title: "404 Page",
    slug: "05-404-page"
  },
  {
    number: "06",
    image: "",
    title: "Glassmorphism",
    slug: "06-glassmorphism`"
  },
  {
    number: "07",
    image: "",
    title: "Counter",
    slug: "07-counter"
  },
  {
    number: "08",
    image: "",
    title: "Dark/Light Mode",
    slug: "08-dark-light-mode"
  },
  {
    number: "09",
    image: "",
    title: "Animated Loading",
    slug: "09-animated-loading"
  },
  {
    number: "10",
    image: "",
    title: "Particle.js",
    slug: "10-particle-js"
  },
  {
    number: "11",
    image: "",
    title: "Login Form",
    slug: "11-login-form"
  },
  {
    number: "12",
    image: "",
    title: "Image Gallery",
    slug: "12-image-gallery"
  },
  {
    number: "13",
    image: "",
    title: "Responsive Menu",
    slug: "13-responsive-menu"
  },
  {
    number: "14",
    image: "",
    title: "Quiz",
    slug: "14-quiz"
  },
]

export const ProjectsList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header returnLink="/" />
      <S.Section>
        <S.Container>
          <S.List>
            {list.map((item, index) => (
              <S.Item key={index} onClick={() => navigate(`/projects/${item.slug}`)}>
                <S.ItemInner>
                  <S.ItemFront>
                    <S.Number>{item.number}</S.Number>
                    
                  </S.ItemFront>
                  <S.ItemBack>
                    <S.Image>{item.image}</S.Image>
                  </S.ItemBack>
                </S.ItemInner>
                <S.Title>{item.title}</S.Title>
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </S.Section>
    </>
    
  )
}