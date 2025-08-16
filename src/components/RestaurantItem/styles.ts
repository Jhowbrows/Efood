import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  background-color: ${Cores.branco};
  color: ${Cores.RosaEscuro};
  width: 472px;
  border: 1px solid ${Cores.RosaEscuro};
  position: relative;
  box-shadow: rgb(0, 0, 0, 1) 3px 3px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContainerImg = styled.div`
  width: 100%;
  max-height: 217px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContainerTag = styled.div`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
  gap: 8px;

  p {
    background-color: ${Cores.RosaEscuro};
    color: ${Cores.Bege};
    padding: 4px 8px;
    font-weight: bold;
  }
`

export const ContainerDesc = styled.div`
  padding: 8px;
  height: auto;
`

export const ContainerReview = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Review = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
`

export const Descrição = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;

  p {
    font-size: 14px;
    line-height: 24px;
  }
`
