import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getDate } from '../utils/getDate'

interface NewsItemProps {
  title: string
  points?: number | null
  user?: string | null
  time: number
  id: number
}

export default function NewsItem({title, points, user, time, id}: NewsItemProps) {
  return (
    <NewsLink to={`/${id}`}>
      <Title>{title}</Title>
      <ItemInfo>
        {points} points<Dot>•</Dot><User>{user}</User><Dot>•</Dot>{getDate(time)}
      </ItemInfo>
    </NewsLink>
  )
}

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
`

const ItemInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({theme}) => theme.colors.font};
  font-size: 12px;
`

const User = styled.span`
  color: ${({theme}) => theme.colors.secondary};
`

const Dot = styled.span`
  color: ${({theme}) => theme.colors.font};
  opacity: 0.2;
  margin: 0 5px
`

const NewsLink = styled(Link)`
	color: inherit;
	text-decoration: none;
  background-color: ${({theme}) => theme.colors.elements};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.colors.opacity};
  padding: 12px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f7f7f7;
  }
`