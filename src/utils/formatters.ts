export const reduceDescription = (description: string) => {
  if (description.length > 170) {
    return description.slice(0, 160) + '...'
  }
  return description
}

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Pedido[]) => {
  return items.reduce((acumulator, actualValue) => {
    return (acumulator += actualValue.preco)
  }, 0)
}
