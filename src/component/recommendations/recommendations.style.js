import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const StyledRow = styled.div`
  grid-column: 1/-1;
`

export const StyledRecom = styled.div`
  grid-column: 1/-1;
`
export const StyledRecomHeader = styled.div`
  display: flex;
`

export const StyledRecomBox = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
`
