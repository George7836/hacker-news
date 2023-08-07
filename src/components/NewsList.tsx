import { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useAppDispatch, useAppSelector } from '../types/hooks'
import { getAllNews, userSelector } from '../store/slices/newsSlice'
import { News } from '../types/news'
import { Preloader } from '../styles/Preloader'
import { ReactComponent as Spinner } from '../assets/icons/spinner.svg'
import { styled } from 'styled-components'

export default function NewsList() {
  const news = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllNews())
    const interval = setInterval(() => {
      dispatch(getAllNews())
    }, 60000)
    return () => clearInterval(interval)
  }, [news.updated])

  if(news.loading) return  <Preloader><Spinner/></Preloader>

  return (
    <NewsListContainer>
      {news.news.length > 0 
        ?
        news.news.map((el: News) => (
          <NewsItem
            key={el.id}
            id={el.id}
            title={el.title}
            points={el.points}
            user={el.user}
            time={el.time}
          />
        ))
        : null
      }
    </NewsListContainer>
  )
}

const NewsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`