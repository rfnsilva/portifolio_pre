import React from 'react'

import { Container, HeroBg, Video } from './styles'

const HeroSection: React.FC = () => {
  return (
    <Container>
      <HeroBg>
        <Video autoplay loop muted src={{}} type="video/mp4" />
      </HeroBg>
    </Container>
  )
}

export default HeroSection
