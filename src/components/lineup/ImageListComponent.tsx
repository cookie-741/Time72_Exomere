import SingleImageComponent from "./SingleImageComponent";
import productphoto1 from "../../assets/images/LINEUP/p2.png";
import productphoto2 from "../../assets/images/LINEUP/p3.png";
import productphoto3 from "../../assets/images/LINEUP/p4.png";
import productphoto4 from "../../assets/images/LINEUP/p5.png";
import productphoto5 from "../../assets/images/LINEUP/p6.png";
import productphoto6 from "../../assets/images/LINEUP/p7.png";
import productphoto7 from "../../assets/images/LINEUP/p8.png";
import productphoto8 from "../../assets/images/LINEUP/p9.png";
import productphoto9 from "../../assets/images/LINEUP/p10.png";
interface ImageItem {
  imageUrl: string;
  title: string;
  price: string;
  size: string;
}
const items: ImageItem[] = [
  { imageUrl: productphoto1, title: "リフティングショットスージングジェル", price: "¥11,000", size: "100g" },
  { imageUrl: productphoto2, title: "セラミドリセルクリーム", price: "¥14,000", size: "50g" },
  { imageUrl: productphoto3, title: "エーデルワイススノーマッサージクリーム", price: "¥11,000", size: "100g" },
  { imageUrl: productphoto4, title: "アロマヒーリングミスト", price: "¥4,000", size: "150ml" },
  { imageUrl: productphoto5, title: "アロマヒーリングミスト", price: "¥8,000", size: "150ml" },
  { imageUrl: productphoto6, title: "グルタチオンメラシャットソリューション", price: "¥14,000", size: "50g" },
  { imageUrl: productphoto7, title: "リカバリーバムセット", price: "¥7,500", size: "15g" },
  { imageUrl: productphoto8, title: "インプラントソリューション", price: " ¥11,000", size: "20g" },
  { imageUrl: productphoto9, title: "ローズガーデンマスクパック", price: "¥5,000", size: "10g" },
];
const ImageListComponent = () => {
  return (
    <div className="px-30">
      <div className="grid grid-cols-3 gap-8">
        {items.map((item, index) => {
          return (
            <div>
              <div key={index} className="bg-slate-100 p-4 text-white mb-4 flex justify-center items-center">
                <SingleImageComponent imageUrl={item.imageUrl} />
              </div>
              <div className=" mb-10">
                <p className="text-gray-700">
                  <span className="mr-2">{item.title}</span>
                  <span>{item.size}</span>
                </p>
                <p>{item.price}</p>
              </div>
            </div>

          );
        })}
      </div>
    </div>);
}
export default ImageListComponent;