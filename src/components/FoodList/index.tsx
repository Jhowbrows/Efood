import { useState } from 'react'
import Food from '../Food'
import * as S from './styles'

import Close from '../../assets/images/close.png'
import { Restaurant } from '../../pages/Home'
import { priceFormat } from '../../utils/formatters'

export type Props = {
  restaurant: Restaurant
}

type modalState = {
  isVisible: boolean
}

export const FoodList = ({ restaurant }: Props) => {
  const [modal, setModal] = useState<modalState>({ isVisible: false })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [imgAlt, setImgAlt] = useState('')
  const [foodServe, setFoodServe] = useState('')
  const [foodPrice, setFoodPrice] = useState(0)

  const closeModal = () => {
    setModal({ isVisible: false })
  }

  return (
    <>
      <S.FoodListContainer>
        <S.List>
          {restaurant.cardapio.map((cardapios) => (
            <li
              key={cardapios.id}
              onClick={() => {
                setModal({ isVisible: true })
                setTitle(cardapios.nome)
                setDescription(cardapios.descricao)
                setFoodServe(cardapios.porcao)
                setImg(cardapios.foto)
                setImgAlt(cardapios.nome)
                setFoodPrice(cardapios.preco)
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
            <S.ModalImg src={img} alt={imgAlt} />
            <S.ModalContainer>
              <S.Title>{title}</S.Title>
              <S.Description>
                {description}
                <p>Serve: de {foodServe}</p>
              </S.Description>
              <S.ModalButon>
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
