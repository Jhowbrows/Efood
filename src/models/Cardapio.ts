class Cardapio {
  img: string
  name: string
  descricao: string
  id: number

  constructor(id: number, img: string, name: string, descricao: string) {
    this.img = img
    this.name = name
    this.descricao = descricao
    this.id = id
  }
}

export default Cardapio
