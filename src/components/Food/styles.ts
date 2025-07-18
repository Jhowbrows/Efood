import styled from 'styled-components'
import { Cores } from '../../styles'

export const FoodContainer = styled.div`
  background-color: ${Cores.RosaEscuro};
  color: ${Cores.branco};
  max-width: 320px;
  width: 100%;
  height: 338px;
  padding: 8px;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 160px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const DescriptionContainer = styled.div`
  h3 {
    margin: 8px 0;
  }
`

export const FoodButton = styled.button`
  background-color: ${Cores.Bege};
  color: ${Cores.RosaEscuro};
  width: 304px;
  height: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  margin: 8px 0;
  border: none;
  cursor: pointer;
`
