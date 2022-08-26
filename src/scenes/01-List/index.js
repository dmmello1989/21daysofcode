import * as S from "./styles";

const list = [
  {
    number: "01",
    image: "",
    title: "Repo",
    link: "/"
  },
  {
    number: "02",
    image: "",
    title: "Hello World",
    link: "/"
  },
  {
    number: "03",
    image: "",
    title: "Animated Button",
    link: "/"
  },
  {
    number: "04",
    image: "",
    title: "Calculator",
    link: "/"
  },
  {
    number: "05",
    image: "",
    title: "404 Page",
    link: "/"
  },
  {
    number: "06",
    image: "",
    title: "Glassmorphism",
    link: "/"
  },
  {
    number: "07",
    image: "",
    title: "Counter",
    link: "/"
  },
  {
    number: "08",
    image: "",
    title: "Dark/Light Mode",
    link: "/"
  },
  {
    number: "09",
    image: "",
    title: "Animated Loading",
    link: "/"
  },
  {
    number: "10",
    image: "",
    title: "Particle.js",
    link: "/"
  },
  {
    number: "11",
    image: "",
    title: "Login Form",
    link: "/"
  },
  {
    number: "12",
    image: "",
    title: "Image Gallery",
    link: "/"
  },
  {
    number: "13",
    image: "",
    title: "Responsive Menu",
    link: "/"
  },
  {
    number: "14",
    image: "",
    title: "Quiz",
    link: "/"
  },
]

export const List = () => {
  return (
    <S.Section>
      <S.Container>
        <S.List>
          {list.map((item, index) => (
            <S.Item key={index}>
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
  )
}