import { Link } from 'react-router-dom';
import LocationPicker from './LocationPicker';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header className="_nav">
      <div className="flex h-full">
        <div className="max-w-[178px] w-full cursor-pointer hover:bg-gray-50 flex items-center justify-center border-r _border-light">
          <Link to={'/'}>
            <span className="font-black text-[38px] text-yellow-400 tracking-tight">
              bring<strong className="text-green-600">It</strong>
            </span>
          </Link>
        </div>
        <div className="lg:w-[320px] flex items-center justify-center cursor-pointer hover:bg-gray-50">
          <LocationPicker />
        </div>
        <div className="flex-1 relative">
          <SearchBox />
        </div>
        <div className="flex items-center justify-center cursor-pointer hover:bg-gray-50 max-w-[160px] w-full ">
          <span className="font-medium _text-default">Login</span>
        </div>
        <div className="py-2 flex h-full items-center mr-8 ml-3">
          Cart button
        </div>
      </div>
    </header>
  );
};

export default Header;
