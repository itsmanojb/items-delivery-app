export type Category = {
  id: number
  title: string
  image: string
  color: string
  icon?: string
  subcategories: SubCategory[]
}

type SubCategory = {
  id: number
  title: string
  image: string
  icon?: string
  subcategories?: InnerSubCategory[]
}

type InnerSubCategory = {
  id: number
  title: string
  image?: string
}
