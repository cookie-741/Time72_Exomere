import Benifits from './Benifits';
import point4 from "@/assets/images/DETAIL/t5.svg";
const PointFourComponent = () => {
    return (
        <section>
            <div className="my-32 mt-64">
                <div className="text-center mb-12">
                <img src={point4} className="mb-12 w-24 mx-auto" />
                    <h2 className="font-semibold text-4xl tracking-widest mb-20">エキソミアが証明した驚きの効果</h2>
                </div>
                <div className="w-full flex flex-col items-center justify-start">
                    <Benifits effect='抗酸化効果' percentage='55%' />
                    <Benifits effect='細胞再生効果' percentage='2%' />
                    <Benifits effect='抗酸化効果' percentage='15%' />
                    <Benifits effect='しわ改善効果' percentage='20%' />
                </div>
            </div>
        </section>
    )
}

export default PointFourComponent;