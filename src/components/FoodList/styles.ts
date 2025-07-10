import styled from 'styled-components'
import { Cores } from '../../styles'

export const FoodListContainer = styled.div`
  max-width: 1024px;
  width: 100%;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  padding-top: 56px;
  color: ${Cores.Bege};
  padding-bottom: 120px;
`
