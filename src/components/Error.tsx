import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-3">
      <p className="text-xl font-semibold text-red-300">Page not found!</p>
      <Link to="/">
        <span className="text-sm underline cursor-pointer">
          go back to home
        </span>
      </Link>
    </div>
  );
};

export default Error;
