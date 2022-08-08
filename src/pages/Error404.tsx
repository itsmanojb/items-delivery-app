import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="_container flex md:justify-center pt-12 px-4">
      <div className="flex gap-20">
        <div className="hidden md:block">
          <img src="/img404.webp" alt="" className="h-72" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-3xl mt-6 md:mt-0">Oops!</h2>
          <p className="mt-3 mb-4 leading-tight font-medium text-lg _text-default">
            The page you are looking for can't be found.
          </p>

          <span className="text-[13px] _text-muted">
            You might find these links useful
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

export default Error404;
