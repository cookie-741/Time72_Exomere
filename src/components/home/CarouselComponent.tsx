import { useState, useEffect } from "react";
import image1 from "@/assets/images/index/exomere_index_photos_2.png";
import image2 from "@/assets/images/index/exomere_index_srider2_1.png";
import image3 from "@/assets/images/index/exomere_index_srider3_1.png";
import arrow from "@/assets/images/TOP/2.svg";
import discover from "@/assets/images/TOP/t3.svg";

const dotStyle = (isActive: boolean) => ({
  cursor: "pointer",
  margin: "0 6px",
  fontSize: "33px",
  color: isActive ? "#5F5F5F" : "#CCCCCC",
});

const slides = [
  {
    url: image1,
    title: "Recovery balm",
    decription:
      "72 時 間 低 温 熟 成 発 酵 過 程 を \n 通 じ て 開 発 さ れ た \n エ ク ソ ソー ム B B ク リ ー ム",
  },
  {
    url: image2,
    title: "Message Cream",
    decription:
      "老 化 し た 角 質 の た め に 、\n 燻 ん だ 肌 を \n 明 る く 透 明 に 。",
  },
  {
    url: image3,
    title: "Exomere Spicus",
    decription:
      " エ キ ソ ソ ー ム の 抽 出 物 \n 老 化 . 損 傷 し た 皮 膚 の た め の \n 再 生 ケ ア ソ リ ュ ー シ ョ ン ",
  },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-full px-6 sm:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Image Column */}
        <div>
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].title}
            className="w-full h-[500px] sm:h-[735px] object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="bg-[#606060] flex flex-row justify-between items-center p-20 sm:p-10">
          <div className="  sm:pl-[20%]">
            <h2 className="mt-10 text-white text-3xl font-light italic">
              {slides[currentIndex].title}
            </h2>
            <p className="mt-4 sm:mt-10 text-xl text-white">
              {slides[currentIndex].decription.split("\n").map((line, i) => (
                <span key={i} className="leading-loose">
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <button className=" text-white font-sans italic">
              <img src={discover} className="w-40 h-32" alt="discover more" />
            </button>
          </div>

          <div className="mt-0 self-start sm:self-center">
            <div
              onClick={goToNext}
              className="cursor-pointer text-white"
            >
              <img src={arrow} className="w-14 h-14 sm:w-16 sm:h-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-6 sm:p-20">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            style={dotStyle(slideIndex === currentIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
