import {BsFillBasket2Fill} from "react-icons/bs"

const CartWidget = () => {
    return (
        <div style={{display: "flex",justifyContent: "center", gap: "10px"}}>
            <span>0</span>
            <BsFillBasket2Fill size={20} />
        </div>
    );
};

export default CartWidget;