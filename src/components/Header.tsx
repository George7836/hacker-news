import styled from 'styled-components'
import { ReactComponent as ReloadIcon } from './../assets/icons/reload.svg'
import { ReactComponent as HackerNewsIcon } from './../assets/icons/hv.svg'
import { ReactComponent as BackIcon } from './../assets/icons/back.svg'
import { Button } from './Button'
import { Link, useLocation } from 'react-router-dom'
import { setUpdatedNews } from '../store/slices/newsSlice'
import { useAppDispatch, useAppSelector } from '../types/hooks'
import { setUpdateOneNews, userSingleNewsSelector } from '../store/slices/singleNewsSlice'
import { useCallback } from 'react'

export default function Header() {
  const dispatch = useAppDispatch()
  const item = useAppSelector(userSingleNewsSelector)
  const location = useLocation()

  const updateItems = useCallback((page: string) => {
    if(page === `/${item.id}`) {
      dispatch(setUpdateOneNews())
    } 
    if(page === '/') {
      dispatch(setUpdatedNews())
    }
  }, [location.pathname, item.id])

  return (
    <HeaderContainer>
      <HackerNewsLogo to={'/'}>
        <HackerNewsIcon/>
        <h1>Hacker News</h1>
      </HackerNewsLogo>
      <Buttons>
        {location.pathname !== '/' &&
          <Link to='/'>
            <Button>
              <BackIcon/>
            </Button>
          </Link>
        }
        <Button onClick={() => updateItems(location.pathname)}>
          <ReloadIcon/>
        </Button>
      </Buttons>
    </HeaderContainer>
  )
}

const HeaderContainer = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  box-shadow: 0px 1px 0px ${({theme}) => theme.colors.shadow};
  margin-bottom: 40px;
  background-color: ${({theme}) => theme.colors.elements};
`
const HackerNewsLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: inherit;
	text-decoration: none;

  & h1 {
    margin-left: 10px;
    font-size: inherit;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 15px;
  }
`