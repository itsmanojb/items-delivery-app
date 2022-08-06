import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
  return (
    <div className="_searchbox">
      <FiSearch
        className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400"
        size={24}
      />
      <input
        type="text"
        placeholder="Search for products"
        className="outline-none w-full text-[14px]"
      />
    </div>
  );
};

export default SearchBox;
