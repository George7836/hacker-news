import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneNews } from "../api/getOneNews"
import { INewsPage } from "../types/news"
import styled from "styled-components"
import { getDate } from "../utils/getDate"
import { Preloader } from "../styles/Preloader"
import { ReactComponent as Spinner } from '../assets/icons/spinner.svg'
import Comment from '../components/Comment'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`

const NewsLink = styled.a`
  color: rgb(255,102,0);
  margin-bottom: 25px;
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

export default function NewsPage() {
  const { id } = useParams()
  const [item, setItem] = useState<INewsPage>()

  useEffect(() => {
    const getData = async () => {
      const response = await getOneNews(id!)
      setItem(response)
    }
    getData()
  }, [])

  return (
    <>
      {item !== undefined
        ?  
        <>
          <Card>
            <Title>{item?.title}</Title>
            <NewsLink href={item?.url} target="_blank">{item?.url}</NewsLink>
            <Row>{getDate(item?.time)}</Row>
            <Author>author: <span>{item?.user}</span></Author>
            <Row>comments: {item?.comments_count}</Row>
          </Card>
          {item?.comments 
            ? item.comments.map((el) => (
              <Comment 
                key={el.id}
                user={el.user!} 
                timeAgo={el.time_ago} 
                content={el.content} 
                comments={el.comments}
              />
            ))
            : null
          }
        </>
        : 
        <Preloader>
          <Spinner/>
        </Preloader>}
    </>
  )
}
