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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 1;
  display: none;

  &.visible {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  background-color: ${Cores.RosaEscuro};
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
`

export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;
  margin-top: 32px;
`

export const ModalImg = styled.img`
  object-fit: cover;
  width: 280px;
  height: 280px;
  margin: 32px 24px 32px 32px;
  object-fit: cover;
`

export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${Cores.branco};
  line-height: 21.09px;
  display: block;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${Cores.branco};
  line-height: 22px;
  width: 100%;
  margin: 16px 0 16px 0;
  p {
    margin-top: 16px;
  }
`

export const ModalButon = styled.button`
  padding: 4px 7px;
  color: ${Cores.RosaEscuro};
  font-weight: bold;
  border: none;
  cursor: pointer;
`
