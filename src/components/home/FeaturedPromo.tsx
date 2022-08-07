import Misc from '../../lib/data/layout.json';
import { shuffleItems } from '../../utils/helper';

const FeaturedPromo = () => {
  const allPromos = Misc.filter((item) => item.type === 66)[0].objects?.map(
    (el: any) => el.data.image_url
  );

  const promos = shuffleItems(allPromos);

  return (
    <section>
      <div className="flex gap-5 pb-2 pt-4 mx-4 overflow-x-auto overflow-y-hidden">
        {promos?.map((promo, i) => (
          <div
            key={i}
            className="rounded-lg min-w-[345px] cursor-pointer h-[200px] overflow-hidden"
          >
            <img src={promo} alt="..." className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPromo;
