
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

export type Category = {
  id: number
  title: string
  image: string
  color: string
  icon?: string
  subcategories: SubCategory[]
}


export type DiscountOffer = {
  button_cta_text: string;
  bank_name: string;
  subtitle: string;
  offer_color: string;
  bottomsheet_image_url: string;
  offer: {
    key: string;
    value: string;
  };
  text_color: string;
  content: {
    data: string[];
    heading: string;
  }[];
  bg_color: string;
  image_url: string;
  icon_url: string;
  title: string;
  deeplink: string;
};