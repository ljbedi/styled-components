import styled from 'styled-components'
import * as dayjs from 'dayjs'


const CommentCard = ({imageUrl, userName, datePosted, comment}) => {

  const CommentContainer = styled.div`
    background-color: rgb(240, 237, 237);
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    margin: 1.5rem;
    max-width: 500px;
  `
  const FlexLeft = styled.div`
    
  `

  const Image = styled.img`
    padding: 1rem;
  `

  const FlexRight = styled.div`
    
  `

  const Username = styled.h3`
    color: rgb(127, 93, 165);
    margin: 1rem 0rem 0rem;
  `

  const Paragraph = styled.p`
    margin: 0.5rem 0.5rem 0.5rem 0rem;
  `
  const LikeAndReply = styled.span`
    color: rgb(127, 93, 165);
  `
  const dayjs = require('dayjs')
  //import dayjs from 'dayjs' // ES 2015
    dayjs().format()

  const relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

  const daysAgo = dayjs().to(dayjs(datePosted))



  return (
    <CommentContainer>
      <FlexLeft><Image src={imageUrl}></Image></FlexLeft>
      <FlexRight>
        <Username>{userName}</Username>
        <Paragraph>{comment}</Paragraph>
        <Paragraph><LikeAndReply>Like • Comment</LikeAndReply>{daysAgo}</Paragraph>
      </FlexRight>
    </CommentContainer>
  )
}

export default CommentCard