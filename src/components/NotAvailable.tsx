import { Link } from 'react-router-dom';

type Props = {};

const NotAvailable = (props: Props) => {
  return (
    <div className="_container flex md:justify-center pt-12 px-4 h-[80vh]">
      <div className="flex gap-20 h-full items-center">
        <div className="hidden md:block">
          <img src="/img404.webp" alt="" className="h-72" />
        </div>
        <div className="flex flex-col justify-center max-w-lg">
          <h2 className="font-bold text-3xl mt-6 md:mt-0">Sorry!</h2>
          <p className="mt-3 mb-4 leading-snug font-medium text-lg _text-default">
            For demo BringIt uses partial (sample) data from BlinkIt. So details
            for all the products are not available.
          </p>

          <span className="text-[13px] _text-muted">
            You can try following items to check.
          </span>
          <p className="leading-tight my-3">
            <small className="text-[#0c831f] cursor-pointer">
              <Link to="/">Go to Home</Link>
            </small>
            <br />
            <small className="text-[#0c831f] cursor-pointer">
              Learn about bringit
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotAvailable;
