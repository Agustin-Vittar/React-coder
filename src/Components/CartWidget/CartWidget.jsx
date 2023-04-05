import { BsFillBasket2Fill } from "react-icons/bs"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartWidget = () => {
    
    const { getTotalQuantity } = useContext( CartContext )

    const total = getTotalQuantity()
    
    return (
            <div style={{display: "flex",justifyContent: "center", gap: "10px"}}>
                <span style={{color: "white" }}>{total}</span>
                <BsFillBasket2Fill color="white" />
            </div>
        
    );
};

export default CartWidget;