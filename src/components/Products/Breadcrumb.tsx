import { Link } from 'react-router-dom';
import { ProductItemDetailed } from '../../utils/types';

const Breadcrumb = (props: ProductItemDetailed) => {
  const { level0_category, level1_category, name } = props;

  const category = level0_category[0];
  const subcategory = level1_category[0];

  return (
    <div className="text-xs flex flex-wrap text-black font-medium">
      <span className="cursor-pointer hover:text-[#0c831f]">
        <Link to="/">Home</Link>
      </span>
      <span>&nbsp; / &nbsp;</span>
      <span className="cursor-pointer hover:text-[#0c831f]">
        <Link to="/">{category.name}</Link>
      </span>
      {subcategory && (
        <>
          <span>&nbsp; / &nbsp;</span>
          <span className="cursor-pointer hover:text-[#0c831f]">
            <Link to="/">{subcategory.name}</Link>
          </span>
        </>
      )}
      <span>&nbsp; / &nbsp;</span>
      <span className="_text-muted">{name}</span>
    </div>
  );
};

export default Breadcrumb;
