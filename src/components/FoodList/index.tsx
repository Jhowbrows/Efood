import { useState } from 'react'
import Food from '../Food'
import * as S from './styles'

import Close from '../../assets/images/close.png'
import { priceFormat } from '../../utils/formatters'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/Cart'

export type Props = {
  restaurant: Restaurant
  pedido: Pedido
}

type modalState = {
  isVisible: boolean
}

export const FoodList = ({ restaurant, pedido }: Props) => {
  const [modal, setModal] = useState<modalState>({ isVisible: false })
  const [foodTitle, setFoodTitle] = useState('')
  const [description, setDescription] = useState('')
  const [foodImg, setFoodImg] = useState('')
  const [imgAlt, setImgAlt] = useState('')
  const [foodServe, setFoodServe] = useState('')
  const [foodPrice, setFoodPrice] = useState(0)
  const [foodId, setFoodId] = useState(0)

  const closeModal = () => {
    setModal({ isVisible: false })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    const newAdd = {
      ...pedido,
      id: foodId,
      nome: foodTitle,
      foto: foodImg,
      preco: foodPrice
    }
    dispatch(add(newAdd))
    dispatch(open())
    setModal({ isVisible: false })
  }

  return (
    <>
      <S.FoodListContainer className="agrupador">
        <S.List>
          {restaurant.cardapio.map((cardapios) => (
            <li
              key={cardapios.id}
              onClick={() => {
                setModal({ isVisible: true })
                setFoodTitle(cardapios.nome)
                setDescription(cardapios.descricao)
                setFoodServe(cardapios.porcao)
                setFoodImg(cardapios.foto)
                setImgAlt(cardapios.nome)
                setFoodPrice(cardapios.preco)
                setFoodId(cardapios.id)
              }}
            >
              <Food
                key={cardapios.id}
                img={cardapios.foto}
                description={cardapios.descricao}
                imgAlt={cardapios.nome}
                title={cardapios.nome}
              />
            </li>
          ))}
        </S.List>
      </S.FoodListContainer>

      {modal.isVisible && (
        <S.Modal className={modal.isVisible ? 'visible' : ''}>
          <S.ModalContent>
            <S.ModalImg src={foodImg} alt={imgAlt} />
            <S.ModalContainer>
              <S.Title>{foodTitle}</S.Title>
              <S.Description>
                {description}
                <p>Serve: de {foodServe}</p>
              </S.Description>
              <S.ModalButon onClick={addToCart}>
                Adicionar ao Carrinho - {priceFormat(foodPrice)}
              </S.ModalButon>
            </S.ModalContainer>
            <S.CloseIcon
              src={Close}
              onClick={() => {
                closeModal()
              }}
            />
          </S.ModalContent>
          <div
            onClick={() => {
              closeModal()
            }}
            className="overlay"
          ></div>
        </S.Modal>
      )}
    </>
  )
}
