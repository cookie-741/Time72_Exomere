
type SizeBoxProp = {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
}
const SizeBox = ({x,y,w,h}: SizeBoxProp)=>{
    return <div style={{width: x || w,height: y || h}}></div>
}

export default SizeBox;