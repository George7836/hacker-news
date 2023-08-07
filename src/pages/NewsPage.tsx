import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getDate } from "../utils/getDate"
import { Preloader } from "../styles/Preloader"
import { ReactComponent as Spinner } from '../assets/icons/spinner.svg'
import Comment from '../components/Comment'
import { useAppDispatch, useAppSelector } from "../types/hooks"
import { getSingleNews, saveId, userSingleNewsSelector } from "../store/slices/singleNewsSlice"
import NotFound from "../components/NotFound"

export default function NewsPage() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const item = useAppSelector(userSingleNewsSelector)

  useEffect(() => {
    dispatch(getSingleNews(id))
    const interval = setInterval(() => {
      dispatch(getSingleNews(id))
    }, 60000)
    return () => clearInterval(interval)
  }, [id, item.updated])

  useEffect(() => {
    dispatch(saveId(id))
  }, [])

  if(item.loading) return <Preloader><Spinner/></Preloader>

  return (
      <>
        {item.oneNews !== null 
          ?
          <NewsPageInfo>
            <Card>
              <Title>{item.oneNews?.title}</Title>
              <NewsLink href={item.oneNews?.url} target="_blank">{item.oneNews?.domain}</NewsLink>
              <Row>{getDate(item.oneNews?.time)}</Row>
              <Author>author: <span>{item.oneNews?.user}</span></Author>
              <Comments>comments: {item.oneNews?.comments_count}</Comments>
            </Card>
            {item.oneNews?.comments 
              ? item.oneNews.comments.map((el) => (
                <Comment 
                  key={el.id}
                  user={el.user} 
                  timeAgo={el.time_ago} 
                  content={el.content} 
                  comments={el.comments}
                  dead={el.dead}
                  deleted={el.deleted}
                />
              ))
              : null
            }
          </NewsPageInfo>
          : <NotFound/>
        }
      </>
  )
}

const NewsPageInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 15px;

  background-color: ${({theme}) => theme.colors.elements};
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.colors.opacity};
  padding: 10px 15px;
`

const Title = styled.h2`
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 10px;
`

const NewsLink = styled.a`
  color: ${({theme}) => theme.colors.secondary};
  margin-bottom: 25px;
  text-decoration: none;
`

const Row = styled.div`
  margin-bottom: 5px;
`

const Author = styled(Row)`
  margin-bottom: 5px;

  span {
    font-weight: 600;
  }
`

const Comments = styled.div`
`