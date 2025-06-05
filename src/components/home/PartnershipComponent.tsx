import partnership from "@/assets/images/TOP/10.svg";
import React from 'react';

interface PartnershipProps {
  bgImage: string;
}

const Partnership: React.FC<PartnershipProps> = ({ bgImage }) => {
  return (
    <div className="relative flex items-center justify-center bg-white p-4 min-h-[400px] sm:h-[600px] mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <img src={bgImage} alt="Partnership Background" className="w-full h-full object-cover" />
      </div>

      {/* Overlay Text */}
      <div className="relative text-center bg-opacity-10 w-full px-4 sm:px-[100px]">
        <h3 className="text-3xl sm:text-[100px] pb-16 italic font-light text-black">
          <img src={partnership} className="w-1/2 mx-auto" alt="" />
        </h3>
        <p className="text-base sm:text-lg text-black p-4 sm:p-6">
          <span>本社の販売代理にご検討の作業もしくは個人の方は下記の</span>
          <br />
          <span>
            メールまたは電話にて <u>0120－000－000</u>（営業時間 9:00-18:00)
            お問い合わせください。
          </span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 p-7">
          <button className="bg-white font-semibold text-black py-2 px-4 w-[150px]">
            メール
          </button>
          <button className="bg-black font-semibold text-white py-2 px-4 w-[150px]">
            電話
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partnership;