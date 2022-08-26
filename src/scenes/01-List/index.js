import * as S from "./styles";

const list = [
  {
    number: "01",
    text: "Repo",
    link: "/"
  },
  {
    number: "02",
    text: "Hello World",
    link: "/"
  },
  {
    number: "03",
    text: "Animated Button",
    link: "/"
  },
  {
    number: "04",
    text: "Calculator",
    link: "/"
  },
  {
    number: "05",
    text: "404 page",
    link: "/"
  },
  {
    number: "06",
    text: "Glassmorphism",
    link: "/"
  },
  {
    number: "07",
    text: "Counter",
    link: "/"
  },
  {
    number: "08",
    text: "Dark/Light Mode",
    link: "/"
  },
  {
    number: "09",
    text: "Animated Loading",
    link: "/"
  },
  {
    number: "10",
    text: "Particle.js",
    link: "/"
  },
  {
    number: "11",
    text: "Login Form",
    link: "/"
  },
  {
    number: "12",
    text: "Image Gallery",
    link: "/"
  },
  {
    number: "13",
    text: "Responsive Menu",
    link: "/"
  },
  {
    number: "14",
    text: "Quiz",
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
              <S.Number>{item.number}</S.Number>
              {/* <S.Image>{item.image}</S.Image> */}
              <S.Title>{item.title}</S.Title>
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Section>
  )
}