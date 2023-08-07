import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <>
      <Title>404. Not Found.</Title>
      <div> Go back to the <NotFoundLink to='/'>Main page</NotFoundLink></div>
    </>
  )
}

const Title = styled.h2`
  margin-bottom: 20px;
`

const NotFoundLink = styled(Link)`
  color: ${({theme}) => theme.colors.secondary};
  text-decoration: none;
`