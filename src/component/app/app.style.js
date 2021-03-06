import styled from 'styled-components'

export const StyledApp = styled.div`
  padding: 0 36px;

  @media (prefers-color-scheme: dark) {
    background-color: #000;
  }

  @media (min-width: 768px) {
    padding: 0 80px;
  }

  @media (min-width: 1366px) {
    padding: 0 139px;
  }
`
