import React from 'react'
import { Button } from 'react-scroll'

import {
  Container,
  Wrapper,
  InfoRow,
  Text,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Col1,
  Col2,
  ImgWrapper,
  Img
} from './styles'

const infoSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <InfoRow>
          <Col1>
            <Text>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrapper></BtnWrapper>
            </Text>
          </Col1>

          <Col2>
            <ImgWrapper>
              <Img />
            </ImgWrapper>
          </Col2>
        </InfoRow>
      </Wrapper>
    </Container>
  )
}

export default infoSection
