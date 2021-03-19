import styled from 'styled-components'

export const StyleRow = styled.div`
  grid-column: 1/-1;
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

  @media (min-width: 768px) {

    &::before {
      left: -80px;
      right: -80px;
    }
  }
`
