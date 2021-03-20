import styled from 'styled-components'
import { Icon } from '../icomoon'

export const StyleIconWrapper = styled.div`
  grid-column: 1/-1;
  display: grid;
  height: 80px;

  @media (min-width: 1366px) {
    grid-column: span 9;
  }
`

export const StyleIcon = styled(Icon)`
  background-color: #d52027;
  border-radius: 50%;
  padding: 10px;
  place-self: center;
`
