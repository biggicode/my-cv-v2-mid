import styled from 'styled-components'
import { Icon } from '../icomoon'

export const StyleIconWrapper = styled.div`
  grid-column: 1/-1;
  display: grid;
  height: 80px;
`

export const StyleDownloadIcon = styled(Icon)`
  border: 0;
  padding: 10px;
`

export const StyleButtonText = styled.div`
  color: #FFF;
  font-size: 10px;
  font-weight: 600;
  margin: auto;
`

export const StyleDownloadButton = styled.div`
  height: 40px;
  width: 170px;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 10px;
  font-weight: bolder;
  place-self: center;
  background-color: #1875F0;
  display: flex;
  align-content: center;
`

export const StyleMainTitle = styled.h1`
  font-weight: 600;
  color: #707070;
  text-align: center;
  font-size: 48px;
  line-height: 64px;
  margin-top: 30px;
`
export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 16px;
  }
`

export const StyleRow = styled.div`
  grid-column: 1/-1;
`

export const StyleTitlteWrapper = styled.div`
  padding: 10px;
  height: 60px;
  background-color: #d52027;
  position: relative;

  &::before{
    position: absolute;
    content: '';
    background-color: #d52027;
    top: 0;
    bottom: 0;
    left: -36px;
    right: -36px;
  }
  &::after{
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
export const StyleSectionTitle = styled.div`
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  position: relative;
  font-weight: 600;
  font-size: 24px;
`
export const StyleProfession = styled.p`
  font-weight: 600;
  color: #707070;
  text-align: center;
  font-size: 36px;
  line-height: 48px;
`
export const StyleSemiTitle = styled.p`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: #808080;
  margin: 30px 0 10px 0 ;
`
export const StyleDescripitonBox = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  color: #707070;
`
