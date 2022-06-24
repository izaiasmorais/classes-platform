import { useNavigate } from "react-router-dom";
import { PurpleLogo } from "./AssetsTsx/PurpleLogo";

export function Header() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <div onClick={goToHome}>
        <PurpleLogo />
      </div>
    </header>
  );
}
