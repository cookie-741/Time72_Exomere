import React from "react";

interface CertificateProps {
  img: string;
  des: string;
}

const Certificate: React.FC<CertificateProps> = ({ img, des }) => {
  return (
    <div className="flex flex-col items-center px-2 py-16">
      <img src={img} alt="certificate Background" className="w-32 lg:w-48 h-32 lg:h-48 object-cover mb-4" />
      <p className="text-center text-lg">
        {des.split('<br />').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Certificate;
