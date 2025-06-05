
interface SingleImageProps {
    imageUrl: string;
}

const SingleImageComponent: React.FC<SingleImageProps> = ({ imageUrl }) => {

    return (
        <div>
            <img className="h-100" src={imageUrl} alt="Image Name" />    
        </div>
    )
}
export default SingleImageComponent;