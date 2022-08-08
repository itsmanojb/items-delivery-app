import { ItemsCarousel } from '../home';

type MoreProductsProps = {
  title: string;
  products: any[];
};

const MoreProducts = ({ title, products }: MoreProductsProps) => {
  return (
    <section>
      <div className="flex items-center justify-between h-16">
        <h2 className="font-semibold text-[24px] _text-default">{title}</h2>
      </div>
      <ItemsCarousel topItems={products} />
    </section>
  );
};

export default MoreProducts;
