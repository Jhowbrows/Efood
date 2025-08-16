import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, openOrder, remove } from '../../store/reducers/Cart'
import { getTotalPrice, priceFormat } from '../../utils/formatters'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, pedido, isOrder } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const abrirPedido = () => {
    if (pedido.length > 0) {
      dispatch(openOrder())
    } else {
      closeCart()
      alert('Seu carrinho esta vazio')
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      {isOrder ? (
        <>
          <div>
            <Checkout />
            <S.Overlay onClick={closeCart} />
          </div>
        </>
      ) : (
        <>
          <S.Sidebar>
            <ul>
              {pedido.map((item) => (
                <S.ItemCart key={item.id}>
                  <S.ImageItem src={item.foto} alt={item.nome} />
                  <S.InfosItem>
                    <h3>{item.nome}</h3>
                    <span>{priceFormat(item.preco)}</span>
                  </S.InfosItem>
                  <S.DeleteItemButton
                    onClick={() => removeItem(item.id)}
                    type="button"
                  />
                </S.ItemCart>
              ))}
            </ul>
            <S.Prices>
              <p>Valor total:</p>
              <p>{priceFormat(getTotalPrice(pedido))}</p>
            </S.Prices>
            <S.CartButton onClick={abrirPedido}>
              Continuar com a entrega
            </S.CartButton>
          </S.Sidebar>
          <S.Overlay onClick={closeCart} />
        </>
      )}
    </S.CartContainer>
  )
}

export default Cart
