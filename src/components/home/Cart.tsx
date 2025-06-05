import cartImg from "@/assets/images/cart_bg.png";
const Cart = () => {
    return (
        <div className="absolute top-[60%] right-12"> 
            <img src={cartImg} alt="" className="rounded-full w-16 h-16" />
        </div>
    )
}

export default Cart;