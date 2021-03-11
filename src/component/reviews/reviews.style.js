import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const StyledReview = styled.div`
  grid-column: 1/-1;
`

export const StyledReviewHeader = styled.div`
  display: flex;
`

export const StyledReviewContentBox = styled.div`
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  padding: 20px;
  position: relative;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    position: absolute;
    top: -7px;
    left: 15px;
    transform: rotate(45deg);
    clip-path: polygon(-6px -6px, 100% 0, 0 100%);
  }
`

//Text styling

export const StyledContextBoxText = styled.p`
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  color: #707070;
`

export const StyledReviewerName = styled.p`
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  color: #808080;
`

export const StyledReviewDate = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #1875F0;
`
