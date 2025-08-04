import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/Cart'
import { priceFormat } from '../../utils/formatters'

const Cart = () => {
  const { isOpen, pedido } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return pedido.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
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
          <p>{priceFormat(getTotalPrice())}</p>
        </S.Prices>
        <S.CartButton>Continuar com a entrega</S.CartButton>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
