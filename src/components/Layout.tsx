import Header from './Header'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Layout() {
  return (
    <>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 1060px;
	padding: 0 30px;
  margin: 0 auto;
`