import { CartProduct, Category, ProductItem, ProductItemDetailed } from "./types";

const convertTextToURLSlug = (text: string): string => {
  const clearText = text.replace(/[&\/\\#,+()$~%.":*?<>{}]/g, '').toLowerCase();
  return clearText.replace(/\s/g, "-")
}

const getCategoryLink = (category: Category): string => {
  const cat = convertTextToURLSlug(category.title);
  const sub = category.subcategories[0];
  const subcat = convertTextToURLSlug(sub.title);
  return `category/${cat}/${subcat}/${category.id}/${sub.id}`
}

const shuffleItems = (unshuffled: any[] | undefined): any[] => {
  if (unshuffled === undefined) return []
  let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffled;
}

const getProductForCart = (product: ProductItem | ProductItemDetailed): CartProduct => {
  const { product_id, name, price, mrp, unit, image_url } = product;
  return {
    id: product_id.toString(),
    title: name,
    subTitle: unit,
    image: image_url || '',
    price,
    mrp,
  }
}


export { convertTextToURLSlug, getCategoryLink, shuffleItems, getProductForCart }