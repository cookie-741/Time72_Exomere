import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 sm:py-20 px-32 sm:px-24 w-full space-y-10 sm:space-y-14 clear-both">
      <div className="w-full flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-[100px] lg:space-x-[200px]">
        {/* Brand Section */}
        <div className="space-y-6 sm:space-y-14 w-full sm:w-[400px]">
          <h2 className="text-2xl sm:text-3xl font-bold">EXOMERE™</h2>

          <select className="w-full sm:w-[300px] py-2 px-4 border border-gray-300 focus:outline-none">
            <option>日本語</option>
            <option>English</option>
          </select>

          {/* Social Media Icons */}
          <div className="w-full sm:w-[300px] flex justify-between">
            <FaFacebookF className="text-2xl sm:text-3xl text-black cursor-pointer" />
            <FaXTwitter className="text-2xl sm:text-3xl text-black cursor-pointer" />
            <FaInstagram className="text-2xl sm:text-3xl text-black cursor-pointer" />
            <FaYoutube className="text-2xl sm:text-3xl text-black cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-[100px] lg:space-x-[200px]">
          <div>
            <h3 className="text-sm font-semibold">商品</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>商品ラインアップ</li>
              <li>テクノロジー</li>
              <li>オンラインストア</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">EXOMERE について</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>ミッション</li>
              <li>世界でのエキシミア</li>
              <li>受賞</li>
              <li>企業情報</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">お問い合わせ</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>総合インフォメーション</li>
              <li>応募フォーム</li>
              <li>エキシミアの今</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-[100px] lg:space-x-[200px]">
        <div className="w-full sm:w-[400px]">
          <p className="text-sm text-center sm:text-left">© EXOMERE. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="text-sm flex flex-wrap justify-center sm:justify-start space-x-3">
          <p>プライバシーポリシー</p>
          <p>/</p>
          <p>利用規約</p>
          <p>/</p>
          <p>特定商取引法に基づく表示</p>
          <p>/</p>
          <p>お問い合わせ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
