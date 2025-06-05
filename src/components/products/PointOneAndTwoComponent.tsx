import React from "react";
interface PointProps {
    title: string;
    subtitle: string;
    des: string;
    pointImg: string;
    pointExplainTitle: string;
    pointExplainDes: string;
    pointExplainImg: string;
}

const PointOneAndTwoComponent: React.FC<PointProps> = ({
    title,
    subtitle,
    des,
    pointImg,
    pointExplainTitle,
    pointExplainDes,
    pointExplainImg
}) => {
    return (
        <div>
            <div className="my-40">
                <div className="text-center">
                    <img src={title} className="mb-12 w-24 mx-auto" />
                    <h2 className="font-semibold text-4xl tracking-widest">{subtitle}</h2>
                    <p className=" font-normal text-2xl mt-10 mb-32 leading-relaxed">
                        {des.split('<br />').map((line, index) => (
                            <React.Fragment key={index}>
                                {line.split(/<u>(.*?)<\/u>/).map((part, i) =>
                                    i % 2 === 1 ? <u key={i}>{part}</u> : part
                                )}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <img src={pointImg} alt="" className="mx-auto mb-32 w-[60%] h-[40rem] object-cover" />
                </div>
                <div className="container h-[380px] p-6 flex justify-center items-center w-3/4 bg-gray-100 my-12 mx-auto rounded-lg">
                    <div className="w-1/2 pl-10 tracking-widest ">
                        <h1 className="text-3xl mb-4">{pointExplainTitle}</h1>
                        <p className="text-xl leading-loose">{pointExplainDes.split('<br />').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}</p>
                    </div>
                    <div className="w-2/3 mx-auto">
                        <img src={pointExplainImg} className=" w-full h-[350px] object-contain" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PointOneAndTwoComponent;
