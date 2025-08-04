import styled from 'styled-components'
import { Cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${Cores.RosaEscuro};
  z-index: 1;
  padding: 32px 8px 0px 8px;
`
export const ItemCart = styled.li`
  display: flex;
  background-color: ${Cores.Bege};
  color: ${Cores.RosaEscuro};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
`
export const ImageItem = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
`
export const InfosItem = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
  }
  span {
    margin: 16px 0 33px 0;
    font-weight: 400;
    font-size: 14px;
  }
`
export const DeleteItemButton = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-image: url(${lixeira});
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
  color: ${Cores.Bege};
  font-weight: 700;
  font-size: 14px;
`

export const CartButton = styled.button`
  background-color: ${Cores.Bege};
  color: ${Cores.RosaEscuro};
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`
