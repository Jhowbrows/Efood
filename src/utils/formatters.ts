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
