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
    slug: "06-glassmorphism"
  },
  {
    number: "07",
    image: "",
    title: "Countdown",
    slug: "07-Countdown"
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
  {
    number: "15",
    image: "",
    title: "E-Commerce",
    slug: "15-lp-e-commerce"
  },
  {
    number: "16",
    image: "",
    title: "Public API",
    slug: "16-public-api"
  },
  {
    number: "17",
    image: "",
    title: "Keyboard Events",
    slug: "17-keyvoard-events"
  },
  {
    number: "18",
    image: "",
    title: "Password Generator",
    slug: "18-password-generator"
  },
  {
    number: "19",
    image: "",
    title: "Unsplash Gallery",
    slug: "19-unsplash-gallery"
  },
  {
    number: "20",
    image: "",
    title: "Emoji Picker",
    slug: "20-emoji-picker"
  },
  {
    number: "21",
    image: "",
    title: "Portfolio",
    slug: "21-portfolio"
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