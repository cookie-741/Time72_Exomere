import p1 from "@/assets/images/TECHNOLOGY/p1.png";
import t1 from "@/assets/images/TECHNOLOGY/t1.svg";

const TechnologyCover = () => {
  return (
    <section>
      <div className="relative">
        <img src={p1} className="w-screen object-cover" />
        <img src={t1} className="w-[60%] absolute top-40 left-28" />
      </div>
      
    </section>
  )
}

export default TechnologyCover;