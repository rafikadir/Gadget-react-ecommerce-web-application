import { Outlet } from "react-router-dom";
import Signin from "../../pages/Signin/Signin";
import { CartContext } from "../../App";
import { useContext } from "react";

const PrivateOutlet = () => {
    const {isLoggedIn} = useContext(CartContext);
    return isLoggedIn ? <Outlet/> : <Signin/>;
};

export default PrivateOutlet;