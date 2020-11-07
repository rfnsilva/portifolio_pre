import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  background: #010606;

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`

export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media (max-width: 768px) {
    grid-template-areas: 'col2' 'col1';
  }
`

export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

// export const Button = styled.div``

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`
export const Img = styled.div`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
