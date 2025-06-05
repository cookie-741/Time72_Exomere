import cover from "@/assets/images/missionCover.png";

const AboutMission = () => {
  return (
    <section className="">
      <img
        src={cover}
        className="float-right mr-52 w-[660px] h-[650px] object-cover rounded-full"
      />
      <div className="absolute float-left mt-32 left-64">
        <h3 className=" text-8xl">Our</h3>
        <h1 className=" text-[10rem]">Mission</h1>
      </div>
      <p className=" clear-right w-1/3 transform -translate-y-32 ml-64 tracking-wider leading-loose font-medium">
        <div className="text-2xl mb-12">美をアップデートする。</div>
        <div className="mb-12">
          2024年に日本上陸した EXOMEREは、 <br />
          これまで培ってきたブランドミッションを基盤にし、<br />
          日本中の皆様に健康的な美しさを提供する <br />
          信頼されるビューティーエイジェンシーを目指します。
        </div>
        <div className="mb-16">
          私たちのミッションは、<br /> EXOMERE を通じて新しい文化を創造することと、<br />
          人々にその素晴らし さを体験していただき、<br />
          健やかな美しさを実現するお手伝いをする <br /> パートナーになることです。
        </div>
      </p>
    </section>
  );
};

export default AboutMission;
