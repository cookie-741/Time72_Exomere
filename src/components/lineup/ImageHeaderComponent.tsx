import skincareImg from "@/assets/images/LINEUP/p1.png";

const ImageHeaderComponent = () => {
    return (
        <div className="relative flex items-center justify-center bg-white p-4 min-h-[400px] sm:h-[600px] mb-20 object-cover">
            <div className="absolute inset-0 w-full h-full object-cover">
                <img src={skincareImg} className="w-full h-full object-cover" />
            </div>
        </div>

    );
};

export default ImageHeaderComponent; 