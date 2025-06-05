import React from "react";

interface BenifitsProps {
    effect: string;
    percentage: string;
}

const Benifits: React.FC<BenifitsProps> = ({ effect, percentage }) => {
    return (

        <div className="bg-gray-100 h-40 w-[60%] flex items-center justify-between px-12 mb-6">
            <span className="text-xl">{effect}</span>
            <span className="text-7xl  text-orange-600 flex items-center">{percentage} <span className="text-3xl">UP</span></span>
        </div>
    )
}

export default Benifits;