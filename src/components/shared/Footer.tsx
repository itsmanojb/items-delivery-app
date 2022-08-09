import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { convertTextToURLSlug, getCategoryLink } from '../../utils/helper';
import AppStoreLogo from '../../assets/images/app-store.webp';
import PlayStoreLogo from '../../assets/images/play-store.webp';
import Brands from '../../lib/data/brandsList.json';
import Categories from '../../lib/data/categories.json';

type BrandLink = {
  text: string;
  link: string;
};

const UsefulLinks: string[] = [
  'About',
  'Careers',
  'Blog',
  'Press',
  'Lead',
  'Value',
  'Privacy',
  'Terms',
  'FAQs',
  'Security',
  'Mobile',
  'Contact',
  'Partner',
  'Express',
  'Local',
  'Spotlight',
  'Warehouse',
  'Deliver',
];

const PaymentPartners = [
  {
    logoName: 'mobikwik',
    alt: 'MobikWik',
  },
  {
    logoName: 'paytm',
    alt: 'PayTm',
  },
  {
    logoName: 'visa',
    alt: 'Visa',
  },
  {
    logoName: 'mastercard',
    alt: 'Mastercard',
  },
  {
    logoName: 'maestro',
    alt: 'Maestro',
  },
  {
    logoName: 'rupay',
    alt: 'RuPay',
  },
  {
    logoName: 'amex',
    alt: 'American Express',
  },
  {
    logoName: 'sodex',
    alt: 'Sodexo',
  },
  {
    logoName: 'bhim',
    alt: 'BHIM UPI',
  },
  {
    logoName: '',
    alt: 'Net Banking',
  },
  {
    logoName: '',
    alt: 'Cash on Delivery',
  },
  {
    logoName: '',
    alt: 'bringIt cash',
  },
];

const Footer = () => {
  const allCategories = Categories.map((cat) => ({
    id: cat.id,
    text: cat.title,
    link: getCategoryLink(cat),
  }));

  const allBrands: BrandLink[] = Brands.map((brand) => ({
    text: brand,
    link: convertTextToURLSlug(brand),
  }));

  return (
    <footer>
      <div className="_container space-y-6">
        <div className="flex flex-col md:flex-row gap-4 pb-2">
          <div className="flex-1">
            <h4 className="font-bold my-4 text-lg leading-none lg:mr-4">
              Categories
            </h4>
            <div className="flex flex-wrap gap-y-1">
              {allCategories.map((cat) => (
                <div
                  className="cursor-pointer text-[15px] _text-default w-full xs:w-[50%]"
                  key={cat.id}
                >
                  <Link to={cat.link}>{cat.text}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold my-4 text-lg leading-none lg:mr-4">
              Useful Links
            </h4>
            <div className="flex flex-wrap gap-y-1">
              {UsefulLinks.map((link, i) => (
                <div
                  className="cursor-pointer text-[15px] _text-default w-[50%] xs:w-[33%]"
                  key={i}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold my-6 text-lg">Brands</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {allBrands.map((brand, i) => (
              <Link key={i} to={`brand/${brand.link}`}>
                <span className="_text-default text-sm">{brand.text}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold my-6 text-lg">Payment partners</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-12">
            {PaymentPartners.map((partner, i) => (
              <div key={i}>
                <div className="w-[98px] h-[66px] border rounded-[4px] flex items-center justify-center p-2">
                  {partner.logoName ? (
                    <img
                      src={`/${partner.logoName}.webp`}
                      alt={partner.alt}
                      className="h-14 w-14 object-cover"
                    />
                  ) : (
                    <span className="text-xs _text-default text-center leading-tight">
                      {partner.alt}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fcfcfc] py-6 mt-2 min-h-[60px]">
        <div className="_container">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            <div className="text-xs flex-1 _text-muted lg:max-w-md pr-6">
              &copy; Bring Commerce Private Limited (formerly known as Loafers
              Inc Private Limited), 2016-2022
            </div>
            <div className="flex flex-1 md:flex-row items-center gap-2">
              <h4 className="font-bold text-md leading-none lg:mr-4 _text-default">
                Download App
              </h4>
              <div className="h-8 w-24 rounded-[3px] cursor-pointer overflow-hidden">
                <img
                  src={AppStoreLogo}
                  alt="App store"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-8 w-24 rounded-[3px] cursor-pointer overflow-hidden">
                <img
                  src={PlayStoreLogo}
                  alt="Play store"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center md:justify-end gap-4 lg:gap-6">
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
