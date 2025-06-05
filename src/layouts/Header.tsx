import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import logo from "@/assets/images/index/logo-top.svg";
import menu from "@/assets/images/TOP/menu.png";

interface NavHeightProps {
  h: string;
}
const Header: React.FC<NavHeightProps> = ({ h }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isParnerShipRoute = location.pathname === "/partnership";
  const navigate = useNavigate();
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? 'bg-white bg-opacity-70 shadow-md' : ''
        } fixed transition-all duration-300 z-50 px-4 sm:px-6 w-screen`}
      style={{ height: isSticky ? '160px' : h }}
    >
      <nav className="flex items-center justify-between h-full ">
        <div className="mx-auto flex justify-between items-center w-screen">
          {/* Hamburger Menu */}
          <div className="flex items-center">
            {/* Menu Button */}
            <button onClick={() => setIsOpen(true)} className="pl-14">
              <img src={menu} alt="menu" className="w-8 h-auto" />
            </button>

            {/* Sidebar Overlay */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "-opacity-100" : "opacity-0 pointer-events-none"
                }`}
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar */}
            <div
              className={`fixed inset-y-0 left-0 bg-white w-[75%] md:w-1/2 lg:w-[30%] z-50 transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              <div className="mb-6">
                <div className="text-gray-400 text-3xl ml-16 my-14 cursor-pointer" onClick={() => navigate("/")}>
                  <img src={logo} className="w-48 opacity-50" alt="" />
                </div>
              </div>
              <div className="flex w-full justify-around">
                <div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-black mb-6"
                  >
                    <FaArrowLeft />
                  </button>
                </div>
                <div className="cursor-pointer">
                  <h2 className="text-black text-lg font-semibold mb-6" onClick={() => navigate("/product")}>商品</h2>
                  <ul className="mb-6">
                    <li className="pb-4">
                      <div className="text-gray-600" onClick={() => navigate("/lineup")}>
                        ラインアップ
                      </div>
                    </li>
                    <li className="pb-4">
                      <div className="text-gray-600" onClick={() => navigate("/technology")}>
                        テクノロジー
                      </div>
                    </li>
                    <li>
                      <div className="text-gray-600">
                        オンラインストア
                      </div>
                    </li>
                  </ul>
                  <h2 className="text-black text-lg font-semibold mb-6">
                    EXOMERE について
                  </h2>
                  <ul className="mb-6">
                    <li className="pb-4">
                      <div className="text-gray-600 "
                        onClick={() => navigate("/mission")} >
                        ミッション
                      </div>
                    </li>
                    <li className="pb-4">
                      <div className="text-gray-600" onClick={() => navigate("/awards")}>
                        受賞歴
                      </div>
                    </li>
                    <li>
                      <div className="text-gray-600 " onClick={() => navigate("/info")}>
                        企業情報
                      </div>
                    </li>
                  </ul>
                  <h2 className="text-black text-lg font-semibold mb-4">
                    お問い合わせ
                  </h2>
                  <ul className="mb-6">
                    <li className="pb-4">
                      <div className="text-gray-600 ">
                        総合インフォメーション
                      </div>
                    </li>
                    <li className="pb-4">
                      <div className="text-gray-600 ">
                        応募フォーム
                      </div>
                    </li>
                    <li>
                      <div className="text-gray-600 ">
                        エキソミアの今
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name / Logo */}

          <img src={logo} className="w-48" onClick={() => navigate("/")} />

          {/* Navigation Links */}
          <div className="flex items-center pr-20" >
            <HiOutlineMail size={28} color={` ${isParnerShipRoute ? "white" : "black"}`} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
