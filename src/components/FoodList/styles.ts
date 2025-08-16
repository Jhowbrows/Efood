import styled from 'styled-components'
import { breakPoints, Cores } from '../../styles'

export const FoodListContainer = styled.div`
  max-width: 1024px;

  .agrupador {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  padding: 56px 24px 120px 24px;
  color: ${Cores.Bege};

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${breakPoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 80%;
  }
`

export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;
  margin-top: 32px;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 10px 15px;
    margin-top: 8px;
  }
`

export const ModalImg = styled.img`
  object-fit: cover;
  width: 280px;
  height: 280px;
  margin: 32px 24px 32px 32px;
  object-fit: cover;

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 10px;

    img {
      width: 100%;
    }
    width: 160px;
    height: 160px;
  }
`

export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    img {
      width: 20px;
      padding-bottom: 8px;
    }
  }
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
