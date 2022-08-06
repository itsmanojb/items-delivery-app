import { Category } from "./types";

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

export { convertTextToURLSlug, getCategoryLink }