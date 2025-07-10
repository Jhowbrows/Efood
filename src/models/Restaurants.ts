class Restaurant {
  image: string
  description: string
  infos: string[]
  review: string
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    infos: string[],
    review: string
  ) {
    this.id = id
    this.description = description
    this.infos = infos
    this.image = image
    this.title = title
    this.review = review
  }
}

export default Restaurant
