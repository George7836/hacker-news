import { styled } from 'styled-components'
import { NewsPage } from '../types/news'
import { useState } from 'react'

interface CommentProps {
  user: string | null
  timeAgo: string
  content: string
  comments: NewsPage[]
  dead?: boolean
  deleted?: boolean
}

export default function Comment({user, timeAgo, content, comments, dead, deleted}: CommentProps) {
  const [isCommented, setIsCommented] = useState(false)

  if(dead || deleted) return null

  return (
      <>
        <CommentBlock>
          <Author>{user}</Author>
          <Text dangerouslySetInnerHTML={{ __html: `${content}` }}/>
          <Bottom>
            <Time>{timeAgo}</Time>
            {comments.length 
              ? 
                <Replies onClick={() => setIsCommented((prev) => !prev)}>
                  {isCommented ? 'Hide' : 'Show Replies'} 
                </Replies>
              : null
            }
          </Bottom>
        </CommentBlock>
        {isCommented 
          ?  
          comments.map((el) => (
            <NestedComment key={el.id}>
              <Comment 
                user={el.user} 
                comments={el.comments} 
                timeAgo={el.time_ago} 
                content={el.content}
                dead={el.dead}
                deleted={el.deleted}
              />
            </NestedComment>
          ))
          : null
        }
      </>
  )
}

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;

  background-color: ${({theme}) => theme.colors.elements};
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.colors.opacity};
  padding: 10px 15px;
`

const Author = styled.span`
  font-weight: 600;
`

const Time = styled.span`
  color: ${({theme}) => theme.colors.font};
  opacity: 0.5;
  font-size: 14px;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Replies = styled.button`
  color: ${({theme}) => theme.colors.secondary};
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const Text = styled.div`
  & > p {
    font-size: 14px;
    line-height: 19px;
    margin-block-end: 14px;
    margin-block-start: 14px;
  }
`

const NestedComment = styled.div`
  margin-left: 20px;
`