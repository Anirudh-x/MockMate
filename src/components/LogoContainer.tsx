import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src=""
        alt="logo"
        className="min-w-10 min-h-10 object-contain"
      />
    </Link>
  );
};