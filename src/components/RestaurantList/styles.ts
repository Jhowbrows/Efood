import styled from 'styled-components'

export const ListContainer = styled.section`
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 425px) {
    max-width: 100%;
  }

  .container {
    justify-content: center;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
  align-items: stretch;
  width: fit-content;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
