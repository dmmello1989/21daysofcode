import { Link } from "react-router-dom";
import * as S from "./styles";

export const DetailsHeader = ({ day, slug, projectTitle }) => {
  return (
    <S.Header>
      <S.Container>
        <S.ProjectTitle>
          <span>day <strong>{day}</strong></span> // {projectTitle}
        
          <S.GithubLink>
            github: 
            <Link to={`https://github.com/dmmello1989/21daysofcode/tree/main/src/scenes/${slug}`}>
              https://github.com/dmmello1989/21daysofcode/tree/main/src/scenes/{slug}
            </Link>
          </S.GithubLink>
        </S.ProjectTitle>
      </S.Container>
    </S.Header>
  )
}