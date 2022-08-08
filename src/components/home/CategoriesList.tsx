import Categories from '../../lib/data/categories.json';

type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <section className="my-4">
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 my-2">
        {Categories.map((c) => (
          <div key={c.id} className="h-48">
            <img
              src={`categories/${c.coverFile}`}
              className="mx-auto h-full w-full object-contain"
              alt={c.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
