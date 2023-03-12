import {BsFillBasket2Fill} from "react-icons/bs"


const CartWidget = () => {
    return (
            <div style={{display: "flex",justifyContent: "center", gap: "10px"}}>
                <span style={{color: "white" }}>0</span>
                <BsFillBasket2Fill color="white" />
            </div>
        
    );
};

export default CartWidget;