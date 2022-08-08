
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

export type ProductRow = {
  data?: any
  objects: any[]
}
export interface ProductItem {
  rating: number;
  type_id: number;
  sbc_offer: string;
  default_product_id: number;
  has_details: boolean;
  sts_visibility: boolean;
  mapping_id: number;
  merchant_type: string;
  sbc_price: number;
  unit: string;
  pricing_comment: string;
  level1_category?: (LevelCategoryEntity)[] | null;
  unit_price: number;
  unit_type: string;
  rating_count: number;
  badges?: (null)[] | null;
  line_1: string;
  sbc_enabled: boolean;
  type: string;
  brand: string;
  inventory: number;
  recommended_purchase_quantity: number;
  offer: string;
  price: number;
  incentives?: (null)[] | null;
  sts_sbc_savings?: null;
  discount: number;
  level0_category?: (LevelCategoryEntity)[] | null;
  rating_star_color?: null;
  pl_flag: boolean;
  product_tags?: (null)[] | null;
  video_meta?: (null)[] | null;
  line_2: string;
  name: string;
  rating_flag: boolean;
  mrp: number;
  leaf_category: LeafCategory;
  received_at_ts: number;
  product_id: number;
  image_url: string;
  group_id: number;
  next_available_at: NextAvailableAt;
  combo_flag: boolean;
}
interface LevelCategoryEntity {
  parent_id: number;
  level?: null;
  name: string;
  m_score?: null;
  id: number;
}
interface LeafCategory {
  parent_id: number;
  level: string;
  name: string;
  m_score?: null;
  id: number;
}
interface NextAvailableAt {
  next_available_ts: string;
  next_available_text: string;
}

export interface Attribute {
  title: string;
  url?: any;
  detail: string;
  value: string;
  help_text: string;
  type: string;
}

export interface AttributeCollection {
  attributes: Attribute[];
  title: string;
}

interface Value {
  mapping_id: number;
  selected: boolean;
  enabled: boolean;
  name: string;
  value?: any;
}

interface Option {
  values: Value[];
  type: number;
  title: string;
}

interface PidMapping {
}

interface LevelCategory {
  id: number;
  name: string;
}

interface LeafCategory {
  id: number;
  name: string;
  level: string;
}

interface Reviews {
  reviews_list: any[];
  show_new_badge: boolean;
  title: string;
}

export interface ProductItemDetailed {
  rating: number;
  attribute_collection: AttributeCollection[];
  mrp: number;
  has_details: boolean;
  mapping_id: number;
  brand_id: number;
  merchant_type: string;
  sbc_price?: any;
  b2b_inventory: number;
  badges: any[];
  options: Option[];
  pid_mapping: PidMapping;
  derived_attributes?: any;
  pricing_comment: string;
  level1_category: LevelCategory[];
  unit_price: number;
  unit_type: string;
  rating_count: number;
  unit: string;
  line_1: string;
  line_2: string;
  type: string;
  brand: string;
  inventory: number;
  recommended_purchase_quantity?: any;
  offer: string;
  price: number;
  incentives: any[];
  user_message_limit: number;
  level0_category: LevelCategory[];
  rating_star_color: string;
  type_id: number;
  merchant_id: number;
  pl_flag: boolean;
  name: string;
  sbc_enabled: boolean;
  product_id: number;
  rating_count_text?: any;
  rating_flag: boolean;
  sbc_offer: string;
  leaf_category: LeafCategory;
  received_at_ts: number;
  reviews: Reviews;
  rating_text_color: string;
  image_url: string;
  sbc_unit_price: number;
  title: string;
  group_id: number;
  combo_flag?: any;
  sliding_images: string[];
}

export type CartProduct = {
  id: string;
  title: string;
  subTitle: string;
  image?: string;
  price: number;
  mrp: number;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
  totalPrice: number;
  billPrice: number;
  discount: number;
};